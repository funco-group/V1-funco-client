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
  FollowingCotentMarginDiv,
  FollowingButtonDiv,
  FollowingLeftButtonDiv,
  FollowingUserGraphDiv,
} from "./FollowingUser.styled";
import { ColumnContainer, ColumnTitleDiv } from "@/styles/CommonStyled";
import useParseDate from "@/hooks/useParseDate";
import { addCommasToNumber } from "./FollowStatistics";
import BrandButtonComponent from "@/components/common/Button/BrandButtonComponent";
import palette from "@/lib/palette";
import MonochromePieChart from "./MonochromePieChart";

interface FollowingUserProps {
  followingUser: ComputedFollowingType;
}

function FollowingUser({ followingUser }: FollowingUserProps) {
  const columnList = ["날짜", "투자 금액", "예상 금액", "수익률"];
  const followDate = useParseDate(followingUser.date).split(" ").join("\n");
  const estimatedProfitRate = (
    ((followingUser.estimatedValue - followingUser.investment) /
      followingUser.investment) *
    100
  ).toFixed(2);
  const investmentList: (string | number)[][] = [
    ["현금", followingUser.asset.cash],
  ];
  followingUser.asset.coins.forEach((coin) => {
    const coinPrice = [coin.ticker, coin.price];
    investmentList.push(coinPrice);
  });
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
                <FollowingCotentMarginDiv>
                  <span>{addCommasToNumber(followingUser.investment)}</span> won
                </FollowingCotentMarginDiv>
                <FollowingCotentMarginDiv>
                  <span>{addCommasToNumber(followingUser.estimatedValue)}</span>{" "}
                  won
                </FollowingCotentMarginDiv>
                <FollowingCotentMarginDiv>
                  <span>{estimatedProfitRate}</span> %
                </FollowingCotentMarginDiv>
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
          <BrandButtonComponent color={null} content="거래 내역 보기" />
          <BrandButtonComponent color={null} content="포폴 보기" />
        </FollowingLeftButtonDiv>
        <BrandButtonComponent color={palette.brandBlue} content="정산하기" />
      </FollowingButtonDiv>
    </FollowingUserContainer>
  );
}

export default FollowingUser;
