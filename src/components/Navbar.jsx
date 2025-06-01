import { FaBars, FaCartPlus, FaUser, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router";
import { Button } from "./UseCom";

const Navbar = () => {
  return (
    <nav className="container p-0 mx-auto flex justify-between items-center ">
      <div className="flex items-center gap-10">
        <Link to={"/"}>
          <h1 className="text-4xl font-bold">MailTunnel</h1>
        </Link>
        <ul className="hidden lg:bg-[#1E1E1E0F] py-3 px-5 rounded-lg lg:ml-10 lg:flex gap-12 text-[14px] text-[#1E1E1E]">
          <Link to={"about"} className="hover:opacity-40">
            About
          </Link>
          <Link to={"order"} className="hover:opacity-40">
            Order Item
          </Link>
          <Link to={"market"} className="hover:opacity-40">
            Market
          </Link>
          <Link to={"contact"} className="hover:opacity-40">
            Contact
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <Button text="Request a demo" bg="" />
        <Button text="Log in" />
        <Button bg="#44b1ff" text={"Start free trial"} opacity={"0.2"} />
      </div>

      <div className="lg:hidden block">
        <FaBars size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
