import { Link } from "react-router-dom";
import { Avatar } from "primereact/avatar";

function Header() {
  return (
    <header className="fixed top-0 flex w-full items-center z-[960] justify-between bg-white px-4 py-3">
      <Link className="inline-block max-h-20 max-w-48" to="/dashboard">
        <img src="/assets/img/logo.png" />
      </Link>
      <Avatar
        label="AD"
        className="bg-primary p-6 text-xl text-white"
        size="xlarge"
        shape="circle"
      />
    </header>
  );
}

export default Header;
