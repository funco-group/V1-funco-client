import { Dispatch, SetStateAction } from "react";
import TabButton from "@/components/common/Button/TabButton.styled";
import RankTabContainer from "./RankTab.styled";

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

  return (
    <RankTabContainer>
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
    </RankTabContainer>
  );
}

export default RankTab;
