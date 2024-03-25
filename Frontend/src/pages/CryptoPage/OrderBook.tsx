import { useState } from "react";
import { OrderBookContainer } from "./OrderBook.styled";
import Tab from "@/components/crypto/Tab";

function OrderBook() {
  const tabs = ["일반호가", "누적호가", "호가주문"];
  const [activeTab, setActiveTab] = useState<string>("일반호가");
  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <OrderBookContainer>
      <Tab tabs={tabs} activeTab={activeTab} changeTab={changeTab} />
    </OrderBookContainer>
  );
}

export default OrderBook;
