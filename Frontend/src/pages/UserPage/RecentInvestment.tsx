import palette from "@/lib/palette";
import {
  RecentInvestmentContainer,
  RecentInvestmentContentDiv,
  RecentInvestmentRowDiv,
  CoinNameDiv,
  DateDiv,
  NumberDiv,
} from "./RecentInvestment.styled";
import { ComponentTitleH3 } from "./styled";
import { TopCoinsType } from "@/interfaces/userPage/MemberType";
import { codeNameMapState } from "@/recoils/crypto";
import { useRecoilValue } from "recoil";
import useParseDate from "@/hooks/useParseDate";

interface RecentInvestmentProps {
  topCoins: TopCoinsType[];
}

function RecentInvestment({ topCoins }: RecentInvestmentProps) {
  const nameMap = useRecoilValue(codeNameMapState);

  return (
    <RecentInvestmentContainer>
      <ComponentTitleH3>최근 투자</ComponentTitleH3>
      <RecentInvestmentContentDiv>
        {topCoins.map((coin, idx) => (
          <RecentInvestmentRowDiv key={coin.ticker}>
            <div>
              <NumberDiv color={palette.brandColor}>{idx + 1}.</NumberDiv>
              <CoinNameDiv>
                <img
                  src={`https://static.upbit.com/logos/${coin.ticker.split("-")[1]}.png`}
                  alt=""
                  width={15}
                />
                {nameMap.get(coin.ticker)}
              </CoinNameDiv>
            </div>
            <DateDiv>{useParseDate(coin.createdAt).split(" ")[0]}</DateDiv>
          </RecentInvestmentRowDiv>
        ))}
      </RecentInvestmentContentDiv>
    </RecentInvestmentContainer>
  );
}

export default RecentInvestment;
