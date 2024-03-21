import { NavLink } from "react-router-dom";

interface NavLinkProps {
  path: string;
  name: string;
}
function NavLinkComponent({ path, name }: NavLinkProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
    >
      {name}
    </NavLink>
  );
}

export default NavLinkComponent;
