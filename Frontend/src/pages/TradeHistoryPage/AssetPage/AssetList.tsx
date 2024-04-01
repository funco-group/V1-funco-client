import { ColumnContainer, ColumnTitleDiv } from "@/styles/CommonStyled";
import { ColumnGridDiv } from "./AssetList.styled";
import AssetListItem from "./AssetListItem";
import { TitleDiv } from "@/styles/TradeHistoryStyled";

function AssetList() {
  const columns = [
    "보유자산",
    "보유수량",
    "매수평균가",
    "매수금액",
    "평가금액",
    "평가손익(%)",
  ];

  return (
    <div>
      <TitleDiv>보유자산 목록</TitleDiv>
      <ColumnContainer>
        <ColumnGridDiv>
          {columns.map((column) => (
            <ColumnTitleDiv key={column}>{column}</ColumnTitleDiv>
          ))}
        </ColumnGridDiv>
      </ColumnContainer>
      <AssetListItem />
    </div>
  );
}

export default AssetList;
