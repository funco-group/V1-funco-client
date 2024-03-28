import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { getCoinList, getTickerPrice } from "@/apis/upbit";
import FollowStatistics from "./FollowStatistics";
import { ResMarketCodeType } from "@/interfaces/PriceWindowType";
import { ResTickerType } from "@/interfaces/tradeHistory/follow/ResTickerType";
import DummyData from "@/lib/DummyFollowings";
import FollowingUserListContainer from "./styled";
import FollowingUser from "./FollowingUser";
import { ComputedFollowingType } from "@/interfaces/tradeHistory/follow/ComputedFollowingType";

export interface DummyDataType {
  totalAsset: number;
  followings: FollowingType[];
}

interface FollowingType {
  followingId: number;
  nickname: string;
  investment: number;
  returnRate: number;
  followedAt: string;
  asset: AssetType;
}

interface AssetType {
  cash: number;
  coins: {
    ticker: string;
    volume: number;
  }[];
}

function Index() {
  const [tickerList, setTickerList] = useState("");
  const [tickerPriceMap, setTickerPriceMap] = useState<Map<string, number>>(
    new Map(null),
  );
  const [isLoading, setIsLoading] = useState(false);

  // 코인 리스트 요청 및 설정
  const fetchCoinList = () => {
    getCoinList((res: AxiosResponse<ResMarketCodeType[]>) => {
      const newTickerList = res.data
        .filter((coin) => coin.market.startsWith("KRW"))
        .map((coin) => coin.market)
        .join(",");

      setTickerList(newTickerList);
    });
  };

  // 티커 가격 요청 및 맵 설정
  const fetchTickerPrice = () => {
    if (tickerList) {
      getTickerPrice((res: AxiosResponse<ResTickerType[]>) => {
        const mapList: [string, number][] = res.data.map((coin) => [
          coin.market,
          coin.trade_price,
        ]);
        setTickerPriceMap(new Map(mapList));
      }, tickerList);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCoinList();
  }, []);

  useEffect(() => {
    fetchTickerPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tickerList]);

  useEffect(() => {
    if (tickerPriceMap.size) {
      setIsLoading(false);
    }
  }, [tickerPriceMap]);

  const { totalAsset, followings } = DummyData;
  let totalInvestment = 0;
  let totalEstimatedValue = 0;
  const computedFollowings: ComputedFollowingType[] = [];
  const investmentList: (string | number)[][] = [];
  followings.forEach((following) => {
    const computedFollowing = {
      followingId: following.followingId,
      nickname: following.nickname,
      date: following.followedAt,
      investment: following.investment,
      estimatedValue: Math.round(
        following.asset.cash +
          following.asset.coins.reduce((total, coin) => {
            const price = tickerPriceMap.get(coin.ticker) || 0;
            const value = coin.volume * price;
            return total + value;
          }, 0),
      ),
      asset: {
        cash: following.asset.cash,
        coins: following.asset.coins.map((coin) => {
          const tickerPrice = tickerPriceMap.get(coin.ticker) || 0;
          return {
            ticker: coin.ticker,
            price: tickerPrice * coin.volume,
          };
        }),
      },
    };
    computedFollowings.push(computedFollowing);
    investmentList.push([following.nickname, following.investment]);
    totalInvestment += following.investment;
    totalEstimatedValue += computedFollowing.estimatedValue;
  });

  if (isLoading) {
    return <>loading</>;
  }
  return (
    <div>
      <FollowStatistics
        totalAsset={totalAsset}
        totalInvestment={totalInvestment}
        totalEstimatedValue={totalEstimatedValue}
        investmentList={investmentList}
      />
      <FollowingUserListContainer>
        {computedFollowings.map((following) => (
          <FollowingUser
            key={following.followingId}
            followingUser={following}
          />
        ))}
      </FollowingUserListContainer>
    </div>
  );
}

export default Index;
