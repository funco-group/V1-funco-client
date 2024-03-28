import { useState } from "react";
import {
  ToggleContainer,
  CircleDiv,
  ToggleDiv,
  ToggleText,
  ColumnGridDiv,
  TradeListContainer,
  NoTradeData,
} from "./TradeList.styled";
import TradeListItem from "./TradeListItem";
import { ColumnContainer, ColumnTitleDiv } from "@/styles/CommonStyled";

function TradeList() {
  const toggles = ["체결", "미체결"];
  const columns = ["주문시간", "구분", "주문가격", "주문량", "취소"];
  const concludeColumns = ["주문시간", "구분", "주문가격", "주문량"];
  const [selected, isSelected] = useState<string>("체결");
  const changeSelect = (toggle: string) => {
    isSelected(toggle);
  };

  const tradeList = [
    {
      id: 0,
      tradeDate: "2022.09.12 11:56",
      ticker: "KRW-BTCCC",
      type: "buy",
      volume: 0.000061543,
      orderCash: 43488999,
      price: 26640,
    },
    {
      id: 1,
      tradeDate: "2022.09.12 11:56",
      ticker: "KRW-BTC",
      type: "sell",
      volume: 2.1,
      orderCash: 33424211,
      price: 1323233,
    },
  ];

  return (
    <div>
      <ToggleContainer>
        {toggles.map((toggle: string) => {
          return (
            <ToggleDiv key={toggle}>
              <CircleDiv
                $active={selected === toggle}
                onClick={() => changeSelect(toggle)}
              />
              <ToggleText onClick={() => changeSelect(toggle)}>
                {toggle}
              </ToggleText>
            </ToggleDiv>
          );
        })}
      </ToggleContainer>
      <ColumnContainer>
        {selected === "체결" ? (
          <ColumnGridDiv $conclude>
            {concludeColumns.map((column) => (
              <ColumnTitleDiv key={column}>{column}</ColumnTitleDiv>
            ))}
          </ColumnGridDiv>
        ) : (
          <ColumnGridDiv $conclude={false}>
            {columns.map((column) => (
              <ColumnTitleDiv key={column}>{column}</ColumnTitleDiv>
            ))}
          </ColumnGridDiv>
        )}
      </ColumnContainer>
      <TradeListContainer>
        {tradeList ? (
          tradeList.map((trade) => {
            return (
              <TradeListItem key={trade.id} trade={trade} selected={selected} />
            );
          })
        ) : (
          <NoTradeData>{selected} 내역이 없습니다.</NoTradeData>
        )}
      </TradeListContainer>
    </div>
  );
}

export default TradeList;
