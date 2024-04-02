import { ColumnGrid, ListItemContainer } from "@/styles/CommonStyled";
import { AssetItemDiv, ListItemContainerDiv } from "./AssetListItem.styled";
import { AssetType } from "@/interfaces/AssetType";

function AssetListItem({
  imgSrc,
  name,
  volume,
  averagePrice,
  price,
  evaluationAmount,
  evaluationProfit,
}: AssetType) {
  return (
    <ListItemContainer>
      <ListItemContainerDiv>
        <ColumnGrid column="repeat(6, 1fr)">
          <AssetItemDiv align="left" color="black">
            <img src={imgSrc} alt={name} width={20} />
            {name}
          </AssetItemDiv>
          <AssetItemDiv align={volume ? "right" : ""} color="black">
            {volume ? volume : "-"}
            <span> {volume && name.split("-")[1]}</span>
          </AssetItemDiv>
          <AssetItemDiv align={averagePrice ? "right" : ""} color="black">
            {averagePrice ? averagePrice.toLocaleString("ko-KR") : "-"}
            {averagePrice && <span> WON</span>}
          </AssetItemDiv>
          <AssetItemDiv align={price != null ? "right" : ""} color="black">
            {price != null ? price.toLocaleString("ko-KR") : "-"}
            {price != null && <span> WON</span>}
          </AssetItemDiv>
          <AssetItemDiv align="right" color="black">
            {evaluationAmount.toLocaleString("ko-KR")}
            <span>WON</span>
          </AssetItemDiv>
          <AssetItemDiv
            align={evaluationProfit ? "" : ""}
            color={
              evaluationProfit && evaluationProfit !== 0
                ? evaluationProfit.toString().startsWith("-")
                  ? "blue"
                  : "red"
                : "black"
            }
          >
            {evaluationProfit === null ? "-" : evaluationProfit}
            {evaluationProfit !== null && <span>%</span>}
          </AssetItemDiv>
        </ColumnGrid>
      </ListItemContainerDiv>
    </ListItemContainer>
  );
}

export default AssetListItem;
