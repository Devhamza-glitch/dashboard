import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="fixed  h-full w-72 top-28 z-[960]  bg-white p-4">
      <ul>
        <li className="">
          <NavLink
            to="/dashboard"
            className="aria-[current=page]:bg-primary rounded-2xl flex items-center gap-3 p-4  mb-5 aria-[current=page]:text-white"
          >
            <i className="pi pi-home"></i>
            Dashboard
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="customer"
            className="aria-[current=page]:bg-primary rounded-2xl  flex items-center gap-3 p-4  mb-5 aria-[current=page]:text-white"
          >
            <i className="pi pi-user"></i>
            Customer
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="harvey"
            className="aria-[current=page]:bg-primary rounded-2xl  flex items-center gap-3 p-4  mb-5 aria-[current=page]:text-white"
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
