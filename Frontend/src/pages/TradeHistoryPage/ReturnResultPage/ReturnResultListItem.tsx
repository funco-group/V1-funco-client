import { ColumnGrid, ListItemContainer } from "@/styles/CommonStyled";
import {
  ReturnResultListItemDiv,
  ReturnResultListItemContainer,
} from "./ReturnResultListItem.styled";
import { StatisticsType } from "@/interfaces/StatisticsType";

interface ReturnResultListItemProps {
  result: StatisticsType;
}

function ReturnResultListItem({ result }: ReturnResultListItemProps) {
  return (
    <ListItemContainer>
      <ReturnResultListItemContainer>
        <ColumnGrid column="repeat(7, 1fr)">
          <ReturnResultListItemDiv color="black" align="">
            {result.date}
          </ReturnResultListItemDiv>
          <ReturnResultListItemDiv
            color={
              result.returnResult.toString().startsWith("-") ? "blue" : "red"
            }
            align="right"
          >
            {result.returnResult.toLocaleString("ko-KR")}
            <span>WON</span>
          </ReturnResultListItemDiv>
          <ReturnResultListItemDiv
            color={
              result.returnRate.toString().startsWith("-") ? "blue" : "red"
            }
            align="right"
          >
            {result.returnRate}
            <span>%</span>
          </ReturnResultListItemDiv>
          <ReturnResultListItemDiv
            color={
              result.accReturnResult.toString().startsWith("-") ? "blue" : "red"
            }
            align="right"
          >
            {result.accReturnResult.toLocaleString("ko-KR")}
            <span>WON</span>
          </ReturnResultListItemDiv>
          <ReturnResultListItemDiv
            color={
              result.accReturnRate.toString().startsWith("-") ? "blue" : "red"
            }
            align="right"
          >
            {result.accReturnRate}
            <span>%</span>
          </ReturnResultListItemDiv>
          <ReturnResultListItemDiv color="black" align="right">
            {result.beginningAsset.toLocaleString("ko-KR")}
            <span>WON</span>
          </ReturnResultListItemDiv>
          <ReturnResultListItemDiv color="black" align="right">
            {result.endingAsset.toLocaleString("ko-KR")}
            <span>WON</span>
          </ReturnResultListItemDiv>
        </ColumnGrid>
      </ReturnResultListItemContainer>
    </ListItemContainer>
  );
}

export default ReturnResultListItem;
