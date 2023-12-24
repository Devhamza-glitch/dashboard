import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="fixed top-32 z-[960] h-full w-56 bg-white p-4">
      <ul>
        <li className="">
          <NavLink
            to="/dashboard"
            className="aria-[current=page]:bg-primary flex items-center gap-3 p-4 aria-[current=page]:text-white"
          >
            <i className="pi pi-home"></i>
            Dashboard
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="customer"
            className="aria-[current=page]:bg-primary flex items-center gap-3 p-4 aria-[current=page]:text-white"
          >
            <i className="pi pi-user"></i>
            Customer
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="harvey"
            className="aria-[current=page]:bg-primary flex items-center gap-3 p-4 aria-[current=page]:text-white"
          >
            <i className="pi pi-truck"></i>
            Harvey's
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
