import TabButton from "./Button/TabButton.styled";
import {
  ReturnResultTabContainer,
  DateDiv,
  DateSetDiv,
} from "./ReturnResultTab.styled";

interface ReturnResultTabProps {
  activeTab: string;
  handleTabClick: (tab: string) => void;
}

function ReturnResultTab({ activeTab, handleTabClick }: ReturnResultTabProps) {
  const tabs = ["일별", "월별"];

  return (
    <ReturnResultTabContainer>
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
    </ReturnResultTabContainer>
  );
}

export default ReturnResultTab;
