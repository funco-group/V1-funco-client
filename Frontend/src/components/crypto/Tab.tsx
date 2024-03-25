import { TabContainer, TabItemDiv } from "./Tab.style";

interface Props {
  tabs: string[];
  activeTab: string;
  changeTab: (tab: string) => void;
}

function Tab({ tabs, activeTab, changeTab }: Props) {
  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabItemDiv
          key={tab}
          $active={activeTab === tab}
          onClick={() => changeTab(tab)}
        >
          {tab}
        </TabItemDiv>
      ))}
    </TabContainer>
  );
}

export default Tab;
