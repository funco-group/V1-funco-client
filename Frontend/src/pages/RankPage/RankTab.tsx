import { Dispatch, SetStateAction } from "react";
import TabButton from "@/components/common/Button/TabButton.styled";
import { RankTabContainer, TimeDiv } from "./RankTab.styled";

interface RankTabProps {
  nowTabName: string;
  setNowTabName: Dispatch<SetStateAction<string>>;
  setNowPage: Dispatch<SetStateAction<number>>;
}

const buttonHeight = "2.1875rem";

function RankTab({ nowTabName, setNowTabName, setNowPage }: RankTabProps) {
  const tabNameList: [string, "asset" | "follow", "right" | "left"][] = [
    ["따라오는 금액", "follow", "left"],
    ["총 자산", "asset", "right"],
  ];

  const handleTabClick = (selectedTabName: "asset" | "follow") => {
    setNowTabName(selectedTabName);
    setNowPage(0);
  };

  const nowDate = new Date();
  const hour = nowDate.getHours();
  const minutes = nowDate.getMinutes();
  const rankCalDate =
    minutes >= 30 ? `${hour}시 30분 기준` : `${hour}시 00분 기준`;

  return (
    <RankTabContainer>
      <div>
        {tabNameList.map((tabName, idx) => (
          <TabButton
            key={tabName[1]}
            width={idx === 1 ? "4.5rem" : null}
            height={buttonHeight}
            $active={nowTabName === tabName[1]}
            onClick={() => handleTabClick(tabName[1])}
            radius={tabName[2]}
          >
            {tabName[0]}
          </TabButton>
        ))}
      </div>
      <TimeDiv>·{rankCalDate}</TimeDiv>
    </RankTabContainer>
  );
}

export default RankTab;
