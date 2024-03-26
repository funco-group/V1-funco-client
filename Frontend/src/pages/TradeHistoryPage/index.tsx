import { Outlet } from "react-router-dom";
import PriceWindow from "@/components/common/PriceWindow/PriceWindow";
import { CryptoPageContainer } from "../CryptoPage/styled";
import HistoryTab from "./HistoryTab";
import { TradeHistoryPageContainer } from "./styled";

function index() {
  return (
    <CryptoPageContainer>
      <TradeHistoryPageContainer>
        <HistoryTab />
        <Outlet />
      </TradeHistoryPageContainer>
      <PriceWindow />
    </CryptoPageContainer>
  );
}

export default index;
