import { useNavigate } from "react-router-dom";
import { RankType } from "@/interfaces/rank/RankType";
import { RankTableColumnGridDiv } from "./RankTable.styled";
import {
  RankSpan,
  RankTableContentContainer,
  RankTableContentUserDiv,
} from "./RankTableContent.styled";
import { MoneySpan, RateSpan } from "./TopRankContent.styled";
import { FollowingContentMarginDiv } from "../TradeHistoryPage/FollowPage/FollowingPage/FollowingUser.styled";
import medalMap from "@/lib/medalMap";

interface RankTableContentProps {
  rank: RankType;
  nowTabName: string;
}

function RankTableContent({ rank, nowTabName }: RankTableContentProps) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/member/${rank.member.nickname}`);
  };
  return (
    <RankTableContentContainer>
      <RankTableColumnGridDiv>
        <FollowingContentMarginDiv>
          <RankSpan $isTopRank={medalMap.get(rank.rank)}>
            {medalMap.get(rank.rank) || rank.rank}
          </RankSpan>
        </FollowingContentMarginDiv>
        <RankTableContentUserDiv onClick={handleProfileClick}>
          <img
            src={rank.member.profileUrl}
            alt="rank-user-profile"
            draggable={false}
          />
          {rank.member.nickname}
        </RankTableContentUserDiv>
        <FollowingContentMarginDiv>
          <RateSpan $isProfit={rank.returnRate > 0}>
            {rank.returnRate} %
          </RateSpan>
        </FollowingContentMarginDiv>
        <FollowingContentMarginDiv>
          <MoneySpan $active={nowTabName === "follow"}>
            {rank.followingAsset.toLocaleString("en-US")} won
          </MoneySpan>
        </FollowingContentMarginDiv>
        <FollowingContentMarginDiv>
          <MoneySpan $active={nowTabName === "asset"}>
            {rank.totalAsset.toLocaleString("en-US")} won
          </MoneySpan>
        </FollowingContentMarginDiv>
      </RankTableColumnGridDiv>
    </RankTableContentContainer>
  );
}

export default RankTableContent;
