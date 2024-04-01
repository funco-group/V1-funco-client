import useParseDate from "@/hooks/useParseDate";
import { OpenOrderColumnGridDiv } from "./OpenOrderContentTable.style";
import {
  MoneySpan,
  OpenOrderContentDiv,
  OrderTypeSpan,
} from "./OpenOrderContent.styled";
import BrandButtonComponent from "@/components/common/Button/BrandButtonComponent";
import {
  FollowingContentMarginDiv,
  FollowingDateDiv,
} from "../FollowPage/FollowingPage/FollowingUser.styled";
import { TradeListType } from "@/interfaces/TradeType";

interface OpenOrderContentProps {
  content: TradeListType;
  handleCancelOpenOrder: (id: number) => void;
}

function OpenOrderContent({
  content,
  handleCancelOpenOrder,
}: OpenOrderContentProps) {
  const parseDate = useParseDate;
  const tradeDate = parseDate(content.tradeDate).split(" ").join("\n");

  const tradeTypeMap = new Map([
    ["BUY", "매수"],
    ["SELL", "매도"],
  ]);

  return (
    <OpenOrderContentDiv>
      <OpenOrderColumnGridDiv>
        <FollowingDateDiv>{tradeDate}</FollowingDateDiv>
        <FollowingContentMarginDiv>
          <OrderTypeSpan type={content.tradeType}>
            {tradeTypeMap.get(content.tradeType)}
          </OrderTypeSpan>
        </FollowingContentMarginDiv>
        <FollowingContentMarginDiv>
          {content.ticker.split("-")[1]}
        </FollowingContentMarginDiv>
        <FollowingContentMarginDiv>
          <MoneySpan>{content.price.toLocaleString("en-US")}</MoneySpan> won
        </FollowingContentMarginDiv>
        <FollowingContentMarginDiv>
          <MoneySpan>{content.orderCash.toLocaleString("en-US")}</MoneySpan> won
        </FollowingContentMarginDiv>
        <FollowingContentMarginDiv>
          <MoneySpan>{content.volume}</MoneySpan> {content.ticker.split("-")[1]}
        </FollowingContentMarginDiv>
        <FollowingContentMarginDiv>
          <BrandButtonComponent
            content="취소"
            color={null}
            onClick={() => handleCancelOpenOrder(content.id)}
            cancel={false}
            disabled={false}
          />
        </FollowingContentMarginDiv>
      </OpenOrderColumnGridDiv>
    </OpenOrderContentDiv>
  );
}

export default OpenOrderContent;
