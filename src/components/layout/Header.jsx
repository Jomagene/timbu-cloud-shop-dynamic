import { Link } from "react-router-dom";
import { cart, favorite, profile } from "../../assets/icons-images";
import Button from "../global/Button";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <header className="flex justify-center w-full my-[30px]">
      <div className="wrapper flex justify-between items-center">
        <h1 className="font-black text-[40px]">
          <span className="">A</span>
          <span className="text-[#F15025]">T</span>
        </h1>
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
        <div className="hidden sm:flex">
          <Link to="/product/cart">
            <img src={cart} alt="" className="hover:scale-110" />
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
