import { ColumnGrid, ListItemContainer } from "@/styles/CommonStyled";
import { AssetChangeListItemDiv } from "./AssetChangeListItem.styled";

function AssetChangeListItem() {
  return (
    <ListItemContainer>
      <ColumnGrid column="repeat(9, 1fr)">
        <AssetChangeListItemDiv>2022.09.12 11:56</AssetChangeListItemDiv>
        <AssetChangeListItemDiv>KRW</AssetChangeListItemDiv>
        <AssetChangeListItemDiv>출금</AssetChangeListItemDiv>
        <AssetChangeListItemDiv>
          0 <span>WON</span>
        </AssetChangeListItemDiv>
        <AssetChangeListItemDiv>
          0 <span>WON</span>
        </AssetChangeListItemDiv>
        <AssetChangeListItemDiv>
          0 <span>WON</span>
        </AssetChangeListItemDiv>
        <AssetChangeListItemDiv>
          0 <span>WON</span>
        </AssetChangeListItemDiv>
        <AssetChangeListItemDiv>
          0 <span>WON</span>
        </AssetChangeListItemDiv>
        <AssetChangeListItemDiv>2022.09.12 11:56</AssetChangeListItemDiv>
      </ColumnGrid>
    </ListItemContainer>
  );
}

export default AssetChangeListItem;
