import { useState } from "react";
import {
  ToggleContainer,
  CircleDiv,
  ToggleDiv,
  ToggleText,
  ColumnContainer,
  ColumnTitleDiv,
  TradeListContainer,
  NoTradeData,
} from "./TradeList.styled";

function TradeList() {
  const toggles = ["미체결", "체결"];
  const columns = ["주문시간", "구분", "주문가격", "주문량", "취소"];
  const [selected, isSelected] = useState<string>("미체결");
  const changeSelect = (toggle: string) => {
    isSelected(toggle);
  };

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
        {columns.map((column) => (
          <ColumnTitleDiv key={column}>{column}</ColumnTitleDiv>
        ))}
      </ColumnContainer>
      <TradeListContainer>
        <NoTradeData>{selected} 내역이 없습니다.</NoTradeData>
      </TradeListContainer>
    </div>
  );
}

export default TradeList;
