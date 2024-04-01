import useParseDate from "@/hooks/useParseDate";
import { OpenOrderContentType } from "@/interfaces/tradeHistory/openOrder/OpenOrderContentType";
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

function OpenOrderContent({ content }: { content: OpenOrderContentType }) {
  const parseDate = useParseDate;
  const tradeDate = parseDate(content.tradeDate).split(" ").join("\n");

  const tradeTypeMap = new Map([
    ["BUY", "매수"],
    ["SELL", "매도"],
  ]);

  const handleCancelClick = () => {
    console.log("취소");
  };
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
            onClick={handleCancelClick}
            cancel={false}
            disabled={false}
          />
        </FollowingContentMarginDiv>
      </OpenOrderColumnGridDiv>
    </OpenOrderContentDiv>
  );
}

export default OpenOrderContent;
