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
            <DataDiv>
              {totalAsset?.cash.toLocaleString("ko-KR")} <span>WON</span>
            </DataDiv>
          </AssetItemDiv>
          <AssetItemDiv>
            <TitleDiv>총 보유자산</TitleDiv>
            <DataDiv>
              {totalAsset?.asset.toLocaleString("ko-KR")} <span>WON</span>
            </DataDiv>
          </AssetItemDiv>
        </AssetItemContainer>
        <AssetItemContainer $top={false}>
          <AssetItemDiv>
            <TitleDiv>총 매수금액</TitleDiv>
            <DataDiv>
              {totalAsset?.price.toLocaleString("ko-KR")} <span>WON</span>
            </DataDiv>
          </AssetItemDiv>
          <AssetItemDiv>
            <TitleDiv>총 평가손익</TitleDiv>
            <DataDiv>
              {totalAsset?.returnResult.toLocaleString("ko-KR")}{" "}
              <span>WON</span>
            </DataDiv>
          </AssetItemDiv>
        </AssetItemContainer>
        <AssetItemContainer $top={false}>
          <AssetItemDiv>
            <TitleDiv>총 평가금액</TitleDiv>
            <DataDiv>
              {totalAsset?.evaluationAmount.toLocaleString("ko-KR")}{" "}
              <span>WON</span>
            </DataDiv>
          </AssetItemDiv>
          <AssetItemDiv>
            <TitleDiv>총 평가수익률</TitleDiv>
            <DataDiv>
              {totalAsset?.evaluationProfit} <span>%</span>
            </DataDiv>
          </AssetItemDiv>
        </AssetItemContainer>
      </GreenContainer>
    </TotalAssetContainer>
  );
}

export default TotalAsset;
