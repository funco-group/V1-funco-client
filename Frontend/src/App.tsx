import "@/App.css";
import { RecoilRoot } from "recoil";
import RoutesComponent from "./routes/Routes";

export default function App() {
  return (
    <RecoilRoot>
      <RoutesComponent />
    </RecoilRoot>
  );
}
