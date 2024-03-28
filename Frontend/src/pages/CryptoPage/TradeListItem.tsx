import {
  TradeListItemContainer,
  TradeItemDiv,
  TypeColumnDiv,
  CancleButton,
  OrderPriceDiv,
  TradeVolumeDiv,
  TradeDateDiv,
} from "./TradeListItem.styled";

interface TradeListType {
  id: number;
  tradeDate: string;
  ticker: string;
  type: string;
  volume: number;
  orderCash: number;
  price: number;
}

interface TradeListItemProps {
  trade: TradeListType;
  selected: string;
}

function TradeListItem({ trade, selected }: TradeListItemProps) {
  const concluded = selected === "체결";

  return (
    <TradeListItemContainer $concluded={concluded}>
      <TradeItemDiv $last={false}>
        <TradeDateDiv>{trade.tradeDate}</TradeDateDiv>
      </TradeItemDiv>
      <TradeItemDiv $last={false}>
        <TypeColumnDiv type={trade.type}>
          {trade.ticker}
          <div>{trade.type === "buy" ? "매수" : "매도"}</div>
        </TypeColumnDiv>
      </TradeItemDiv>
      <TradeItemDiv $last={false}>
        <OrderPriceDiv>
          {trade.orderCash.toLocaleString()}
          <div>{trade.price.toLocaleString()}</div>
        </OrderPriceDiv>
      </TradeItemDiv>
      <TradeItemDiv $last={concluded}>
        <TradeVolumeDiv>{trade.volume}</TradeVolumeDiv>
      </TradeItemDiv>
      {!concluded && (
        <TradeItemDiv $last>
          <CancleButton>취소</CancleButton>
        </TradeItemDiv>
      )}
    </TradeListItemContainer>
  );
}

export default TradeListItem;
