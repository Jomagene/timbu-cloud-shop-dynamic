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
        <nav className="hidden sm:flex text-[16px] w-[356px] justify-between items-center">
          <Button
            content="Home"
            styles="border-b-[2px] border-solid border-b-[#F15025] text-[#F15025]"
          />
          <Button content="About Us" />
          <Button content="Contact Us" />
        </nav>
        <div className="hidden sm:flex w-[158px] justify-between">
          <img src={favorite} alt="" />
          <img src={cart} alt="" />
          <div className="h-[50px] w-[50px] object-cover overflow-hidden rounded-full">
            <img src={profile} alt="" className="h-[100%]" />
          </div>
        </div>
        <div className="sm:hidden">
          <MenuIcon style={{ fontSize: 40, color: "#F15025" }} />
        </div>
      </div>
    </header>
  );
}

export default Header;
