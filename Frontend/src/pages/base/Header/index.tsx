import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BodyContainer from "./styled";

function index() {
  return (
    <div>
      <Navbar />
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </div>
  );
}

export default index;
