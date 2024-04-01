import { TitleDiv } from "@/styles/TradeHistoryStyled";
import { ChartGraphContainer, ChartDiv } from "./ChartGraph.styled";

function ChartGraph() {
  return (
    <>
      <TitleDiv>투자손익 그래프</TitleDiv>
      <ChartGraphContainer>
        <ChartDiv $left>차트</ChartDiv>
        <ChartDiv $left={false}>차트</ChartDiv>
      </ChartGraphContainer>
    </>
  );
}

export default ChartGraph;
