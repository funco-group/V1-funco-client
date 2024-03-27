import "@/App.css";
import { useRecoilValue } from "recoil";
import RoutesComponent from "./routes/Routes";
import SettleModal from "./pages/TradeHistoryPage/FollowPage/FollowingPage/SettleModal";
import settleModalState from "./recoils/settleModal";

export default function App() {
  const { settleModal } = useRecoilValue(settleModalState);
  return (
    <>
      <RoutesComponent />
      {settleModal && <SettleModal />}
    </>
  );
}
