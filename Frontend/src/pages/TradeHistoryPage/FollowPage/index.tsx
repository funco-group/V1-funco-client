import { Outlet } from "react-router-dom";

function index() {
  return (
    <div>
      Follow default
      <Outlet />
    </div>
  );
}

export default index;
