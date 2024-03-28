import { useState } from "react";
import Tab from "@/components/crypto/Tab";
import TradeContainer from "./Trade.styled";
import NormalTrade from "./NormalTrade";
import ShortTrade from "./ShortTrade";
import TradeList from "./TradeList";

function Trade() {
  const tabs = ["일반거래", "간편거래", "거래내역"];
  const [activeTab, setActiveTab] = useState<string>("일반거래");
  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <TradeContainer activeTab={activeTab}>
      <Tab tabs={tabs} activeTab={activeTab} changeTab={changeTab} />
      {activeTab === "일반거래" && <NormalTrade />}
      {activeTab === "간편거래" && <ShortTrade />}
      {activeTab === "거래내역" && <TradeList />}
    </TradeContainer>
  );
}

export default Trade;
