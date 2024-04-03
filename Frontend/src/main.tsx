import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "@/App.tsx";
import "./index.css";
import ScrollToTop from "./styles/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RecoilRoot>
      <ScrollToTop />
      <App />
    </RecoilRoot>
  </BrowserRouter>,
);
