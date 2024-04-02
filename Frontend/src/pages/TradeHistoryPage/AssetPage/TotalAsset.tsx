import { GreenContainer } from "@/styles/TradeHistoryStyled";
import {
  AssetItemContainer,
  AssetItemDiv,
  TitleDiv,
  DataDiv,
  TotalAssetContainer,
} from "./TotalAsset.styled";
import { TotalAssetType } from "@/interfaces/AssetType";

interface TotalAssetProps {
  totalAsset: TotalAssetType | undefined;
}

function TotalAsset({ totalAsset }: TotalAssetProps) {
  return (
    <TotalAssetContainer>
      <GreenContainer>
        <AssetItemContainer $top>
          <AssetItemDiv>
            <TitleDiv>보유</TitleDiv>
            <DataDiv color="black">
              {totalAsset?.cash.toLocaleString("ko-KR")} <span>WON</span>
            </DataDiv>
          </AssetItemDiv>
          <AssetItemDiv>
            <TitleDiv>총 보유자산</TitleDiv>
            <DataDiv color="black">
              {totalAsset?.asset.toLocaleString("ko-KR")} <span>WON</span>
            </DataDiv>
          </AssetItemDiv>
        </AssetItemContainer>
        <AssetItemContainer $top={false}>
          <AssetItemDiv>
            <TitleDiv>총 매수금액</TitleDiv>
            <DataDiv color="black">
              {totalAsset?.price.toLocaleString("ko-KR")} <span>WON</span>
            </DataDiv>
          </AssetItemDiv>
          <AssetItemDiv>
            <TitleDiv>총 평가손익</TitleDiv>
            <DataDiv
              color={
                totalAsset?.returnResult.toString().startsWith("-")
                  ? "blue"
                  : "red"
              }
            >
              {totalAsset?.returnResult.toLocaleString("ko-KR")}{" "}
              <span>WON</span>
            </DataDiv>
          </AssetItemDiv>
        </AssetItemContainer>
        <AssetItemContainer $top={false}>
          <AssetItemDiv>
            <TitleDiv>총 평가금액</TitleDiv>
            <DataDiv color="black">
              {totalAsset?.evaluationAmount.toLocaleString("ko-KR")}{" "}
              <span>WON</span>
            </DataDiv>
          </AssetItemDiv>
          <AssetItemDiv>
            <TitleDiv>총 평가수익률</TitleDiv>
            <DataDiv
              color={
                totalAsset?.evaluationProfit.toString().startsWith("-")
                  ? "blue"
                  : "red"
              }
            >
              {totalAsset?.evaluationProfit} <span>%</span>
            </DataDiv>
          </AssetItemDiv>
        </AssetItemContainer>
      </GreenContainer>
    </TotalAssetContainer>
  );
}

export default TotalAsset;
