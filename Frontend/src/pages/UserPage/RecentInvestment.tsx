import palette from "@/lib/palette";
import {
  RecentInvestmentContainer,
  RecentInvestmentContentDiv,
  RecentInvestmentRowDiv,
} from "./RecentInvestment.styled";
import { ColorSpan } from "./UserFollow.styled";
import { ComponentTitleH3 } from "./styled";

interface RecentInvestmentProps {
  topCoins: string[];
}

function RecentInvestment({ topCoins }: RecentInvestmentProps) {
  return (
    <RecentInvestmentContainer>
      <ComponentTitleH3>최근 투자</ComponentTitleH3>
      <RecentInvestmentContentDiv>
        {topCoins.map((coin, idx) => (
          <RecentInvestmentRowDiv key={coin}>
            <ColorSpan color={palette.brandColor}>{idx + 1}.</ColorSpan>
            <span> {coin.split("-")[1]}</span>
          </RecentInvestmentRowDiv>
        ))}
      </RecentInvestmentContentDiv>
    </RecentInvestmentContainer>
  );
}

export default RecentInvestment;
