import ChartGraph from "./ChartGraph";
import {
  ChartContainer,
  ChartInfoContainer,
  CoinNameDiv,
  PriceContainer,
  CurPriceDiv,
  PriceDiv,
  ChangeDiv,
  ChangeTextDiv,
  ChangeInfoDiv,
  ButtonsContainer,
  TypeButton,
  TradePriceContainer,
  TradePriceItemDiv,
  TradeTitleDiv,
  TradePriceDiv,
} from "./Chart.styled";
import Bitcoin from "@/assets/icon/bitcoin-icon.png";

function Chart() {
  return (
    <ChartContainer>
      <ChartInfoContainer>
        <CoinNameDiv>
          <img src={Bitcoin} alt="" width={30} />
          <span>비트코인</span>
          KRW-BTC
        </CoinNameDiv>
        <PriceContainer>
          <CurPriceDiv>
            <PriceDiv>
              21,735,000
              <span>KRW</span>
            </PriceDiv>
            <ChangeDiv>
              <ChangeTextDiv>전일대비</ChangeTextDiv>
              <ChangeInfoDiv>+0.37%</ChangeInfoDiv>
              <ChangeInfoDiv>▲ 80,000</ChangeInfoDiv>
            </ChangeDiv>
          </CurPriceDiv>
          <TradePriceContainer>
            <TradePriceItemDiv>
              <TradeTitleDiv $top>
                고가
                <TradePriceDiv>21,752,000</TradePriceDiv>
              </TradeTitleDiv>
              <TradeTitleDiv $top={false}>
                저가 <TradePriceDiv>21,752,000</TradePriceDiv>
              </TradeTitleDiv>
            </TradePriceItemDiv>
            <TradePriceItemDiv>
              <TradeTitleDiv $top>
                거래량(24H)
                <TradePriceDiv>
                  21,752,000 <span>BTC</span>
                </TradePriceDiv>
              </TradeTitleDiv>
              <TradeTitleDiv $top={false}>
                거래대금(24H)
                <TradePriceDiv>
                  67,811,769,048 <span>KRW</span>
                </TradePriceDiv>
              </TradeTitleDiv>
            </TradePriceItemDiv>
          </TradePriceContainer>
        </PriceContainer>
      </ChartInfoContainer>
      <ButtonsContainer>
        <TypeButton>일봉</TypeButton>
        <TypeButton>주봉</TypeButton>
        <TypeButton>월봉</TypeButton>
        <TypeButton>1분봉</TypeButton>
        <TypeButton>5분봉</TypeButton>
        <TypeButton>10분봉</TypeButton>
      </ButtonsContainer>
      <ChartGraph />
    </ChartContainer>
  );
}

export default Chart;
