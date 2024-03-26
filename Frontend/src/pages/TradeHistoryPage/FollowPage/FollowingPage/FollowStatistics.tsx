import {
  FollowingStatisticsContainer,
  FollowingStatisticsDetailDiv,
  FollowingStatisticsDetailInnerDiv,
  StatisticsRowDiv,
} from "./FollowStatistics.styled";
import MonochromePieChart from "./MonochromePieChart";

interface FollowStatisticsProps {
  totalInvestment: number;
  totalEstimatedValue: number;
  totalAsset: number;
  investmentList: (string | number)[][];
}

export function addCommasToNumber(number: number) {
  // 숫자를 문자열로 변환
  const numberString = String(number);
  // 소수점 위치 확인
  const decimalIndex = numberString.indexOf(".");
  // 소수점 이전 부분과 이후 부분 분리
  const integerPart =
    decimalIndex === -1 ? numberString : numberString.slice(0, decimalIndex);
  const decimalPart =
    decimalIndex === -1 ? "" : numberString.slice(decimalIndex);
  // 세 자리마다 쉼표 추가
  let result = "";
  for (let i = 0; i < integerPart.length; i += 1) {
    result += integerPart[i];
    if (
      (integerPart.length - i - 1) % 3 === 0 &&
      i !== integerPart.length - 1
    ) {
      result += ",";
    }
  }
  // 결과 반환 (소수점 포함)
  return result + decimalPart;
}

function FollowStatistics({
  totalInvestment,
  totalEstimatedValue,
  totalAsset,
  investmentList,
}: FollowStatisticsProps) {
  const totalEstimatedProfitRate = (
    (totalEstimatedValue / totalInvestment) *
    100
  ).toFixed(2);
  const totalInvestmentAssetRatio = Math.round(
    (totalInvestment / totalAsset) * 100,
  );

  const statisticsList = [
    ["총 투자 금액", addCommasToNumber(totalInvestment)],
    ["총 예상 수익금", addCommasToNumber(totalEstimatedValue)],
    ["총 예상 수익률", totalEstimatedProfitRate],
  ];
  return (
    <FollowingStatisticsContainer>
      <FollowingStatisticsDetailDiv>
        <FollowingStatisticsDetailInnerDiv>
          {statisticsList.map((statistic, idx) => (
            <StatisticsRowDiv key={statistic[0]}>
              <div>{statistic[0]}</div>
              <div>
                {statistic[1]} <span>{idx === 2 ? " %" : " won"}</span>
              </div>
            </StatisticsRowDiv>
          ))}
        </FollowingStatisticsDetailInnerDiv>
        <p>
          당신의 총 자산 {addCommasToNumber(totalAsset)}중{" "}
          {totalInvestmentAssetRatio}%가 투자 중입니다.
        </p>
      </FollowingStatisticsDetailDiv>
      <div>
        <MonochromePieChart investmentList={investmentList} isLegend />
      </div>
    </FollowingStatisticsContainer>
  );
}

export default FollowStatistics;
