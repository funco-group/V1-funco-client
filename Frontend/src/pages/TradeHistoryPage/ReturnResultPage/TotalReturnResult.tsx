import { useState } from "react";
import TabButton from "@/components/common/Button/TabButton.styled";
import {
  TotalReturnDateContainer,
  DateDiv,
  DateSetDiv,
  ResultItemContainer,
  ResultItemDiv,
  TitleDiv,
  DataDiv,
  ResultContainer,
} from "./TotalReturnResult.styled";
import { GreenContainer } from "@/styles/TradeHistoryStyled";

function TotalReturnResult() {
  const tabs = ["일별", "월별"];
  const [activeTab, setActiveTab] = useState<string>("일별");
  const titles = ["기간 누적 수익", "기간 누적 수익률", "투자 금액"];
  const resultData = [194418, 180.7, 19848400];
  const unit = ["WON", "%", "WON"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <TotalReturnDateContainer>
        <DateDiv>2024년 01월 01일 ~ 2024년 03월 12일의 투자 손익</DateDiv>
        <DateSetDiv>
          {tabs.map((tab) => {
            return (
              <TabButton
                key={tab}
                width="4rem"
                height="2.5rem"
                $active={tab === activeTab}
                onClick={() => handleTabClick(tab)}
                radius={tab === "일별" ? "left" : "right"}
              >
                {tab}
              </TabButton>
            );
          })}
          <select name="data">
            <option value="javascript">2024년 3월</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
            <option value="golang">Golang</option>
            <option value="python">Python</option>
            <option value="c#">C#</option>
            <option value="C++">C++</option>
            <option value="erlang">Erlang</option>
          </select>
        </DateSetDiv>
      </TotalReturnDateContainer>
      <div>
        <ResultContainer>
          <GreenContainer>
            <ResultItemContainer>
              {titles.map((title, index) => {
                return (
                  <ResultItemDiv $right={index < 2} key={title}>
                    <TitleDiv>{title}</TitleDiv>
                    <DataDiv $red={index < 2}>
                      {resultData[index].toLocaleString("ko-KR")}{" "}
                      <span>{unit[index]}</span>
                    </DataDiv>
                  </ResultItemDiv>
                );
              })}
            </ResultItemContainer>
          </GreenContainer>
        </ResultContainer>
      </div>
    </>
  );
}

export default TotalReturnResult;
