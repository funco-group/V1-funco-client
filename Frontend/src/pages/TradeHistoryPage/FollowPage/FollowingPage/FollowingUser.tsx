import { ComputedFollowingType } from "@/interfaces/tradeHistory/follow/ComputedFollowingType";
import {
  FollowingColumnGridDiv,
  FollowingUserContainer,
  FollowingTitleDiv,
  FollowingDetailDiv,
  FollowingDetailFlexDiv,
  FollowingDetailInnerDiv,
  FollowingContentDiv,
  FollowingDateDiv,
  FollowingContentMarginDiv,
  FollowingButtonDiv,
  FollowingLeftButtonDiv,
  FollowingUserGraphDiv,
} from "./FollowingUser.styled";
import { ColumnContainer, ColumnTitleDiv } from "@/styles/CommonStyled";
import useParseDate from "@/hooks/useParseDate";
import BrandButtonComponent from "@/components/common/Button/BrandButtonComponent";
import palette from "@/lib/palette";
import MonochromePieChart from "./MonochromePieChart";
import useSettleModalState from "@/hooks/recoilHooks/useSettleModalState";

interface FollowingUserProps {
  followingUser: ComputedFollowingType;
}

function FollowingUser({ followingUser }: FollowingUserProps) {
  const { onModal } = useSettleModalState();
  const columnList = ["날짜", "투자 금액", "예상 금액", "수익률"];
  const followDate = useParseDate(followingUser.date).split(" ").join("\n");
  const estimatedProfitRate = (
    ((followingUser.estimatedValue - followingUser.investment) /
      followingUser.investment) *
    100
  ).toFixed(2);
  const investmentList: (string | number)[][] = [["현금", followingUser.cash]];
  followingUser.coins.forEach((coin) => {
    const coinPrice = [coin.ticker, coin.price.toFixed(3)];
    investmentList.push(coinPrice);
  });

  const handleTradeHistoryClick = () => {
    console.log("tradeHistoryClick");
  };

  const handlePortFolioClick = () => {
    console.log("portFolioClick");
  };

  const handleSettleClick = () => {
    const commission =
      followingUser.estimatedValue - followingUser.investment > 0
        ? Math.round(
            (followingUser.estimatedValue - followingUser.investment) * 0.03,
          )
        : 0;
    onModal({
      followId: followingUser.followId,
      estimatedValue: followingUser.estimatedValue,
      commission,
    });
  };
  return (
    <FollowingUserContainer>
      <FollowingTitleDiv>{followingUser.nickname}</FollowingTitleDiv>
      <FollowingDetailFlexDiv>
        <FollowingDetailDiv>
          <FollowingDetailInnerDiv>
            <ColumnContainer>
              <FollowingColumnGridDiv>
                {columnList.map((column) => (
                  <ColumnTitleDiv key={column}>{column}</ColumnTitleDiv>
                ))}
              </FollowingColumnGridDiv>
            </ColumnContainer>
            <FollowingContentDiv>
              <FollowingColumnGridDiv>
                <FollowingDateDiv>{followDate}</FollowingDateDiv>
                <FollowingContentMarginDiv>
                  <span>
                    {followingUser.investment.toLocaleString("ko-KR")}
                  </span>{" "}
                  won
                </FollowingContentMarginDiv>
                <FollowingContentMarginDiv>
                  <span>
                    {followingUser.estimatedValue.toLocaleString("ko-KR")}
                  </span>{" "}
                  won
                </FollowingContentMarginDiv>
                <FollowingContentMarginDiv>
                  <span>{estimatedProfitRate}</span> %
                </FollowingContentMarginDiv>
              </FollowingColumnGridDiv>
            </FollowingContentDiv>
          </FollowingDetailInnerDiv>
        </FollowingDetailDiv>
        <FollowingUserGraphDiv>
          <MonochromePieChart
            investmentList={investmentList}
            isLegend={false}
          />
        </FollowingUserGraphDiv>
      </FollowingDetailFlexDiv>
      <FollowingButtonDiv>
        <FollowingLeftButtonDiv>
          <BrandButtonComponent
            color={null}
            content="거래 내역 보기"
            cancel={false}
            onClick={handleTradeHistoryClick}
            disabled={false}
          />
          <BrandButtonComponent
            color={null}
            content="포폴 보기"
            cancel={false}
            onClick={handlePortFolioClick}
            disabled={false}
          />
        </FollowingLeftButtonDiv>
        <BrandButtonComponent
          color={palette.brandBlue}
          content="정산하기"
          cancel={false}
          onClick={handleSettleClick}
          disabled={false}
        />
      </FollowingButtonDiv>
    </FollowingUserContainer>
  );
}

export default FollowingUser;
