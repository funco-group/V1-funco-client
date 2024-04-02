import {
  ColumnContainer,
  ColumnGrid,
  ColumnTitleDiv,
} from "@/styles/CommonStyled";
import { TitleDiv } from "@/styles/TradeHistoryStyled";
import ReturnResultListItem from "./ReturnResultListItem";

function ReturnResultList() {
  const columns = [
    "일자",
    "월 손익",
    "월 수익률",
    "누적 손익",
    "누적 수익률",
    "기초 자산",
    "기말 자산",
  ];

  return (
    <div>
      <TitleDiv>투자손익 상세</TitleDiv>
      <ColumnContainer>
        <ColumnGrid column="repeat(7, 1fr)">
          {columns.map((column) => (
            <ColumnTitleDiv key={column}>{column}</ColumnTitleDiv>
          ))}
        </ColumnGrid>
      </ColumnContainer>
      <ReturnResultListItem />
    </div>
  );
}

export default ReturnResultList;
