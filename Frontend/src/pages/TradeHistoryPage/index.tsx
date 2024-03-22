import { Outlet } from "react-router-dom";
import PriceWindow from "@/components/common/PriceWindow/PriceWindow";
import { CryptoPageContainer } from "../CryptoPage/styled";
import HistoryTab from "./HistoryTab";

function index() {
  return (
    <CryptoPageContainer>
      <div>
        <HistoryTab />
        <Outlet />
      </div>
      <PriceWindow />
    </CryptoPageContainer>
  );
}

export default index;
