import {
  ColumnContainer,
  ColumnGrid,
  ColumnTitleDiv,
} from "@/styles/CommonStyled";
import AssetChangeListItem from "./AssetChangeListItem";

function AssetChangeList() {
  const columns = [
    "체결시간",
    "코인",
    "종류",
    "거래수량",
    "거래단가",
    "거래금액",
    "수수료",
    "정산금액",
    "주문시간",
  ];
  return (
    <>
      <ColumnContainer>
        <ColumnGrid column="repeat(9, 1fr)">
          {columns.map((column) => (
            <ColumnTitleDiv key={column}>{column}</ColumnTitleDiv>
          ))}
        </ColumnGrid>
      </ColumnContainer>
      <AssetChangeListItem />
    </>
  );
}

export default AssetChangeList;
