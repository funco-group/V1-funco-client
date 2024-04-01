import { GreenContainer } from "@/styles/TradeHistoryStyled";
// import MonochromePieChart from "../FollowPage/FollowingPage/MonochromePieChart";
import {
  TotalAssetInfoContainer,
  AssetItemContainer,
  AssetItemDiv,
  TitleDiv,
  DataDiv,
  TotalAssetContainer,
  ChartContainer,
} from "./TotalAsset.styled";

function TotalAsset() {
  return (
    <TotalAssetContainer>
      <TotalAssetInfoContainer>
        <GreenContainer>
          <AssetItemContainer $top>
            <AssetItemDiv>
              <TitleDiv>보유</TitleDiv>
              <DataDiv>
                0 <span>WON</span>
              </DataDiv>
            </AssetItemDiv>
            <AssetItemDiv>
              <TitleDiv>총 보유자산</TitleDiv>
              <DataDiv>
                0 <span>WON</span>
              </DataDiv>
            </AssetItemDiv>
          </AssetItemContainer>
          <AssetItemContainer $top={false}>
            <AssetItemDiv>
              <TitleDiv>총 매수금액</TitleDiv>
              <DataDiv>
                0 <span>WON</span>
              </DataDiv>
            </AssetItemDiv>
            <AssetItemDiv>
              <TitleDiv>총 평가손익</TitleDiv>
              <DataDiv>
                0 <span>WON</span>
              </DataDiv>
            </AssetItemDiv>
          </AssetItemContainer>
          <AssetItemContainer $top={false}>
            <AssetItemDiv>
              <TitleDiv>총 평가금액</TitleDiv>
              <DataDiv>
                0 <span>WON</span>
              </DataDiv>
            </AssetItemDiv>
            <AssetItemDiv>
              <TitleDiv>총 평가수익률</TitleDiv>
              <DataDiv>
                0 <span>%</span>
              </DataDiv>
            </AssetItemDiv>
          </AssetItemContainer>
        </GreenContainer>
        <ChartContainer>차트</ChartContainer>
      </TotalAssetInfoContainer>
    </TotalAssetContainer>
  );
}

export default TotalAsset;
