import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function index() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default index;
