import ChartGraph from "./ChartGraph";
import ReturnResultList from "./ReturnResultList";
import TotalReturnResult from "./TotalReturnResult";

export default function index() {
  return (
    <div>
      <TotalReturnResult />
      <ChartGraph />
      <ReturnResultList />
    </div>
  );
}
