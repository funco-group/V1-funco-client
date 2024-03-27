import { FollowerContentType } from "@/interfaces/tradeHistory/follow/FollowerContentType";
import {
  FollowingContentMarginDiv,
  FollowingDateDiv,
} from "../FollowingPage/FollowingUser.styled";
import useParseDate from "@/hooks/useParseDate";
import {
  FollowerContentDiv,
  FollowerContentGridDiv,
  FollowerContentInsideGridDiv,
} from "./FollowerContent.styled";

function FollowerContent({ content }: { content: FollowerContentType }) {
  const parseDate = useParseDate;
  const followedAt = parseDate(content.followedAt).split(" ").join("\n");
  let settleDate = "-";
  if (content.settleDate) {
    settleDate = parseDate(content.settleDate).split(" ").join("\n");
  }
  return (
    <FollowerContentDiv>
      <FollowerContentGridDiv>
        <FollowingDateDiv>{followedAt}</FollowingDateDiv>
        <FollowingContentMarginDiv>
          {content.nickname}
        </FollowingContentMarginDiv>
        <FollowingContentMarginDiv>
          <span>{content.investment.toLocaleString("en-US")}</span> won
        </FollowingContentMarginDiv>
        {content.settleDate ? (
          <FollowerContentInsideGridDiv>
            <FollowingContentMarginDiv>
              <span>
                {content.settlement &&
                  content.settlement.toLocaleString("en-US")}
              </span>{" "}
              won
            </FollowingContentMarginDiv>
            <FollowingContentMarginDiv>
              <span>
                {content.returnRate &&
                  content.returnRate.toLocaleString("en-US")}
              </span>{" "}
              %
            </FollowingContentMarginDiv>
            <FollowingContentMarginDiv>
              <span>
                {content.commission &&
                  content.commission.toLocaleString("en-US")}
              </span>{" "}
              won
            </FollowingContentMarginDiv>
          </FollowerContentInsideGridDiv>
        ) : null}
        {content.settleDate ? (
          <FollowingDateDiv>{settleDate}</FollowingDateDiv>
        ) : null}
      </FollowerContentGridDiv>
    </FollowerContentDiv>
  );
}

export default FollowerContent;
