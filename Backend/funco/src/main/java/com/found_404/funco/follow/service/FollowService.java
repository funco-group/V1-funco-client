package com.found_404.funco.follow.service;

import static com.found_404.funco.follow.exception.FollowErrorCode.*;
import static com.found_404.funco.member.exception.MemberErrorCode.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.found_404.funco.follow.domain.Follow;
import com.found_404.funco.follow.domain.FollowingCoin;
import com.found_404.funco.follow.domain.repository.FollowRepository;
import com.found_404.funco.follow.domain.repository.FollowingCoinRepository;
import com.found_404.funco.follow.dto.request.FollowingRequest;
import com.found_404.funco.follow.exception.FollowException;
import com.found_404.funco.member.domain.Member;
import com.found_404.funco.member.domain.repository.MemberRepository;
import com.found_404.funco.member.exception.MemberException;
import com.found_404.funco.trade.cryptoPrice.CryptoPrice;
import com.found_404.funco.trade.domain.HoldingCoin;
import com.found_404.funco.trade.domain.Trade;
import com.found_404.funco.trade.domain.repository.HoldingCoinRepository;
import com.found_404.funco.trade.domain.repository.TradeRepository;
import com.found_404.funco.trade.domain.type.TradeType;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Service
public class FollowService {

	private final FollowRepository followRepository;
	private final MemberRepository memberRepository;
	private final HoldingCoinRepository holdingCoinRepository;
	private final FollowingCoinRepository followingCoinRepository;
	private final TradeRepository tradeRepository;

	private final CryptoPrice cryptoPrice;

	private static final Double FOLLOW_FEE = 0.03;

	@Transactional
	public void createFollow(FollowingRequest request, Long memberId) {

		// 부모 팔로우 멤버
		Member followingMember = findMemberById(request.followingId());
		// 자식 팔로우 멤버
		Member followerMember = findMemberById(memberId);

		// 팔로우 되어있다면 예외
		Optional<Follow> selectFollow = followRepository.findByFollowingAndFollower(followingMember, followerMember);
		if (selectFollow.isPresent()) {
			throw new FollowException(FOLLOW_DUPLICATED_ERROR);
		}

		// 초기 투자금
		long investment = request.investment();

		// 팔로워 초기 투자금 차감
		followerMember.decreaseCash(investment);

		// 부모 팔로워 가용 현금
		long followingCash = followingMember.getCash();

		// 부모의 보유 코인들
		List<HoldingCoin> holdingCoins = holdingCoinRepository.findHoldingCoinByMember(followingMember);

		// 부모의 보유 코인 별 현재 시세 가격
		Map<String, Long> followingCryptoPriceMap = cryptoPrice.getTickerPriceMap(holdingCoins.stream()
			.map(HoldingCoin::getTicker)
			.collect(Collectors.toList()));

		// 부모의 코인 별 보유한 코인 별 가격
		Map<String, Long> followingCryptoToAssetMap = holdingCoins.stream()
			.collect(
				Collectors.toMap(
					HoldingCoin::getTicker,
					holdingCoin -> (long)(followingCryptoPriceMap.get(holdingCoin.getTicker())
						* holdingCoin.getVolume())));

		// 총 보유 자산
		long asset = followingCryptoToAssetMap.values().stream()
			.mapToLong(Long::longValue)
			.sum() + followingCash;

		// 보유 자산의 비율
		Map<String, Double> assetRatioMap = followingCryptoToAssetMap.entrySet().stream()
			.collect(Collectors.toMap(Map.Entry::getKey,
				entry -> (double)Math.round((double)entry.getValue() / asset * 100) / 100));

		// 가용 현금
		long followerCash = (long)(investment * ((double)Math.round((double)followingCash / asset * 100) / 100));

		// 팔로우 생성
		Follow follow = Follow.builder()
			.following(followingMember)
			.follower(followerMember)
			.investment(investment)
			.cash(followerCash)
			.settled(false)
			.build();

		// 팔로잉 코인, 거래 내역 생성
		Map<FollowingCoin, Trade> followingCoinTradeMap = assetRatioMap.entrySet().stream()
			.collect(Collectors.toMap(entry -> FollowingCoin.builder()
					.follow(follow)
					.ticker(entry.getKey())
					.volume((investment * entry.getValue()) / followingCryptoPriceMap.get(entry.getKey()))
					.averagePrice(followingCryptoPriceMap.get(entry.getKey()))
					.build(),
				entry -> Trade.builder()
					.member(followerMember)
					.ticker(entry.getKey())
					.tradeType(TradeType.BUY)
					.volume((investment * entry.getValue()) / followingCryptoPriceMap.get(entry.getKey()))
					.orderCash((long)(investment * entry.getValue()))
					.price(followingCryptoPriceMap.get(entry.getKey()))
					.concluded(true)
					.status(true)
					.build()));

		// 엔티티 insert
		followRepository.save(follow);
		followingCoinRepository.saveAll(followingCoinTradeMap.keySet());
		tradeRepository.saveAll(followingCoinTradeMap.values());
	}

	private Member findMemberById(Long memberId) {
		return memberRepository.findById(memberId).orElseThrow(() -> new MemberException(NOT_FOUND_MEMBER));
	}
}
