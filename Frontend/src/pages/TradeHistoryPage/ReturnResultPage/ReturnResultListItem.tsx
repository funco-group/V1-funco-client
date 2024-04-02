import { ColumnGrid, ListItemContainer } from "@/styles/CommonStyled";
import { ReturnResultListItemDiv } from "./ReturnResultListItem.styled";

function ReturnResultListItem() {
  return (
    <ListItemContainer>
      <ColumnGrid column="repeat(7, 1fr)">
        <ReturnResultListItemDiv color="black">23.6</ReturnResultListItemDiv>
        <ReturnResultListItemDiv color="blue">
          -19,293,323
        </ReturnResultListItemDiv>
        <ReturnResultListItemDiv color="red">0.18%</ReturnResultListItemDiv>
        <ReturnResultListItemDiv color="red">
          999,999,999
        </ReturnResultListItemDiv>
        <ReturnResultListItemDiv color="red">100%</ReturnResultListItemDiv>
        <ReturnResultListItemDiv color="black">
          999,999,999
        </ReturnResultListItemDiv>
        <ReturnResultListItemDiv color="black">
          999,999,999
        </ReturnResultListItemDiv>
      </ColumnGrid>
    </ListItemContainer>
  );
}

export default ReturnResultListItem;
