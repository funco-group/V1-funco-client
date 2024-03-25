import PriceWindow from "@/components/common/PriceWindow/PriceWindow";
import Chart from "./Chart.tsx";
import OrderBook from "./OrderBook";
import Trade from "./Trade";
import { CryptoPageContainer, BottomContainer } from "./styled";

function index() {
  return (
    <CryptoPageContainer>
      <div>
        <Chart />
        <BottomContainer>
          <OrderBook />
          <Trade />
        </BottomContainer>
      </div>
      <PriceWindow />
    </CryptoPageContainer>
  );
}

export default index;
