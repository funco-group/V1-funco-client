import {
  PriceItemContainer,
  NameDiv,
  KorNameDiv,
  CodeDiv,
  PriceDiv,
  UpdateDiv,
  ChangeDiv,
  ChangeRateDiv,
  ChangePriceDiv,
  TradePriceDiv,
  UnitDiv,
  StarIconDiv,
} from "./PriceItem.styled";
import { PriceType } from "@/interfaces/PriceWindowType";

// interface PriceItemProps = {
//   price: PriceType;
//   isFav: boolean;
// }

function PriceItem({ price, isFav }) {
  const isDown = price.signedChangeRate < 0;

  return (
    <PriceItemContainer>
      <StarIconDiv>
        {isFav ? (
          <img
            src="https://cdn.upbit.com/upbit-web/images/icon_list_favorite.c3deb14.svg"
            alt="star"
          />
        ) : (
          <img
            src="https://cdn.upbit.com/upbit-web/images/icon_list_favorite_disabled.4bd898a.svg"
            alt="star"
          />
        )}
      </StarIconDiv>
      <NameDiv>
        <KorNameDiv>{price.koreanName}</KorNameDiv>
        <CodeDiv>{price.code}</CodeDiv>
      </NameDiv>
      <PriceDiv isDown={isDown}>
        <UpdateDiv updated={price.updated} updatedDown={price.updatedDown}>
          {price.tradePrice.toLocaleString("en-US")}
        </UpdateDiv>
      </PriceDiv>
      <ChangeDiv isDown={isDown}>
        <ChangeRateDiv>
          {!isDown && "+"}
          {parseFloat((price.signedChangeRate * 100).toFixed(2))}%
        </ChangeRateDiv>
        <ChangePriceDiv>
          {price.signedChangePrice.toLocaleString("en-US")}
        </ChangePriceDiv>
      </ChangeDiv>
      <TradePriceDiv>
        <div>
          {Math.round(price.accTradePrice24h / 1000000).toLocaleString("en-US")}
        </div>
        <UnitDiv>백만</UnitDiv>
      </TradePriceDiv>
    </PriceItemContainer>
  );
}

export default PriceItem;
