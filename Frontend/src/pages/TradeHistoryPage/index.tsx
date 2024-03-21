import { Outlet } from "react-router-dom";

function index() {
  return (
    <div>
      history index
      <Outlet />
    </div>
  );
}

export default index;
