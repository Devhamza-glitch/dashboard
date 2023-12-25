import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import styled from "styled-components";
import { useRef } from "react";

const CustomMenu = styled(Menu)`
  background: #e4dede;
  font-family: "Poppins";
  & * {
    color: #000;
  }
  & .p-menuitem {
    padding: 12px;
  }
  & .p-menuitem-link {
    display: flex;
    gap:10px;
  }
  & .p-menuitem:hover {
    background-color: #28784c;
    & * {
      color: #e9d9d9;
    }
  }
`;

function Header() {
  const userMenuRef = useRef(null);
  const navigate = useNavigate();
  let items = [
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => navigate("login"),
    },
  ];
  return (
    <header className="fixed top-0 z-[960] flex h-24 w-full items-center justify-between  bg-white px-4 py-3 shadow-dbWidget">
      <Link className="inline-block max-h-20 max-w-48" to="/dashboard">
        <img src="/assets/img/logo.png" />
      </Link>
      {/* <Link to="/login">Sign in</Link> */}
      <Avatar
        label="AD"
        className="bg-primary p-6 text-xl text-white"
        size="xlarge"
        shape="circle"
        onClick={(e) => userMenuRef.current.toggle(e)}
      />
      <CustomMenu
        model={items}
        popup={true}
        ref={userMenuRef}
        pt={{ icon: "text-sm", label: "text-base" }}
      />
    </header>
  );
}

export default Header;
