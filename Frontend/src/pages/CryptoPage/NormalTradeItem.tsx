import TradeButton from "@/components/crypto/TradeButton";
import {
  TradeContainer,
  TradeItem,
  TitleDiv,
  ContentDiv,
  PriceInput,
  UpdownButton,
  PriceButtons,
  PriceButton,
  AmountDiv,
  GreenDiv,
  TradeInfo,
} from "@/styles/Crypto.styled";

interface Props {
  name: string;
}

function NormalTradeItem({ name }: Props) {
  const priceButtons = [
    "10%",
    "20%",
    "25%",
    "30%",
    "40%",
    "50%",
    "75%",
    "최대",
  ];

  return (
    <TradeContainer>
      <TradeItem>
        <TitleDiv>주문가능</TitleDiv>
        <ContentDiv>
          21,984,950
          <div>WON</div>
        </ContentDiv>
      </TradeItem>
      <TradeItem>
        <TitleDiv>사용중</TitleDiv>
        <ContentDiv>
          0<div>WON</div>
        </ContentDiv>
      </TradeItem>
      <TradeItem>
        <TitleDiv>주문가격</TitleDiv>
        <AmountDiv>
          <PriceInput />
        </AmountDiv>
      </TradeItem>
      <TradeItem>
        <TitleDiv>주문수량</TitleDiv>
        <AmountDiv>
          <PriceInput />
          <UpdownButton>▲</UpdownButton>
          <UpdownButton>▼</UpdownButton>
        </AmountDiv>
      </TradeItem>
      <TradeItem>
        <div />
        <PriceButtons>
          {priceButtons.map((button) => {
            return <PriceButton key={button}>{button}</PriceButton>;
          })}
        </PriceButtons>
      </TradeItem>
      <TradeInfo>
        ·수수료(부가세 포함): 0.05%ㅤ·최소주문금액: 1,000 WON
      </TradeInfo>
      <GreenDiv $last={false}>
        <TradeItem>
          <TitleDiv>주문금액</TitleDiv>
          <ContentDiv>
            0 <div>WON</div>
          </ContentDiv>
        </TradeItem>
      </GreenDiv>
      <GreenDiv $last={false}>
        <TradeItem>
          <TitleDiv>수수료</TitleDiv>
          <ContentDiv>
            0.000000 <div>BTC</div>
          </ContentDiv>
        </TradeItem>
      </GreenDiv>
      <GreenDiv $last>
        <TradeItem>
          <TitleDiv>총 획득량</TitleDiv>
          <ContentDiv>
            0.000000 <div>BTC</div>
          </ContentDiv>
        </TradeItem>
      </GreenDiv>
      <TradeButton name={name} />
    </TradeContainer>
  );
}

export default NormalTradeItem;
