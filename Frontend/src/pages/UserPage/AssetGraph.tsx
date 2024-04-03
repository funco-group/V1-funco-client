import { RecentInvestmentContainer } from "./RecentInvestment.styled";
import { ComponentTitleH3 } from "./styled";
import { useEffect, useState } from "react";
import { getTickerPrice } from "@/apis/upbit";
import { AxiosResponse } from "axios";
import { ResTickerType } from "@/interfaces/tradeHistory/follow/ResTickerType";
import { ChartDiv } from "./AssetGraph.styled";
import MemberType from "@/interfaces/userPage/MemberType";
import MonochromePieChart from "@/components/common/Chart/MonochromePieChart";

interface AssetGraphProps {
  member: MemberType;
}

function AssetGraph({ member }: AssetGraphProps) {
  const [investmentList, setInvestmentList] = useState<(string | number)[][]>(
    [],
  );

  const getCurPrice = () => {
    const curPrice = new Map<string, number>();
    getTickerPrice(
      member.memberAssetInfo.coins.map((coin) => coin.ticker).join(","),
      (response: AxiosResponse<ResTickerType[]>) => {
        const { data } = response;
        data.map((coin) => {
          curPrice.set(coin.market, coin.trade_price);
        });
        setInvestmentListFunc(curPrice);
      },
    );
  };

  const setInvestmentListFunc = (curPrice: Map<string, number>) => {
    setInvestmentList([
      ["현금", member.memberAssetInfo.cash],
      ["팔로우", member.followingCash],
      [
        "가상화폐",
        member.memberAssetInfo.coins.reduce((acc, coin) => {
          return acc + Math.floor(coin.volume * curPrice.get(coin.ticker)!);
        }, 0),
      ],
    ]);
  };

  useEffect(() => {
    getCurPrice();
  }, []);

  console.log(investmentList);

  return (
    <RecentInvestmentContainer>
      <ComponentTitleH3>자산 요약</ComponentTitleH3>
      <ChartDiv>
        <MonochromePieChart
          key={investmentList.length}
          investmentList={investmentList}
          isLegend={true}
        />
      </ChartDiv>
    </RecentInvestmentContainer>
  );
}

export default AssetGraph;
