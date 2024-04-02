import { useState } from "react";
import {
  ResultItemContainer,
  ResultItemDiv,
  TitleDiv,
  DataDiv,
  ResultContainer,
} from "./TotalReturnResult.styled";
import { GreenContainer } from "@/styles/TradeHistoryStyled";
import ReturnResultTab from "@/components/common/ReturnResultTab";

function TotalReturnResult() {
  const [activeTab, setActiveTab] = useState<string>("일별");
  const titles = ["기간 누적 수익", "기간 누적 수익률", "투자 금액"];
  const resultData = [194418, 180.7, 19848400];
  const unit = ["WON", "%", "WON"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <ReturnResultTab activeTab={activeTab} handleTabClick={handleTabClick} />
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
