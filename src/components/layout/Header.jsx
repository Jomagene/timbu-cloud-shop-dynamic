import { Link } from "react-router-dom";
import { cart, favorite, profile } from "../../assets/icons-images";
import Button from "../global/Button";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <header className="flex justify-center w-full my-[30px]" id="header">
      <div className="wrapper flex justify-between items-center">
        <Link to="/">
          <h1 className="font-black text-[40px]">
            <span className="">A</span>
            <span className="text-[#F15025]">T</span>
          </h1>
        </Link>
        <nav className="hidden sm:flex text-[16px] w-[356px] justify-between items-center font-semibold">
          <Link to="/">
            <Button
              content="Home"
              styles=" hover:border-b-[4px] border-solid border-b-[#F15025] text-[#F15025] "
            />
          </Link>
          <Button
            content="About Us"
            styles=" hover:border-b-[4px] border-solid border-b-[#F15025] hover:text-[#F15025]"
          />
          <Button
            content="Contact Us"
            styles=" hover:border-b-[4px] border-solid border-b-[#F15025] hover:text-[#F15025] "
          />
        </nav>
        <div className="hidden sm:flex relative">
          <Link to="/product/cart">
            <img src={cart} alt="" className="hover:scale-110" />
            <span className="w-[15px] h-[15px] bg-red-900 text-[12px] text-white font-semibold flex items-center justify-center rounded-full absolute top-0 left-[15px]">
              1
            </span>
          </Link>
        </div>
        <div className="sm:hidden">
          <MenuIcon style={{ fontSize: 40, color: "#F15025" }} />
        </div>
      </div>
    </header>
  );
}

export default Header;
