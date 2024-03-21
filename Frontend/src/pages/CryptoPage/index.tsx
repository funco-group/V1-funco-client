import Chart from "./Chart";
import OrderBook from "./OrderBook";
import Trade from "./Trade";

export default function index() {
  return (
    <>
      <Chart />
      <OrderBook />
      <Trade />
    </>
  );
}
