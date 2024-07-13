import { Link } from "react-router-dom";
import { cart } from "../../assets/icons-images";
import Button from "../global/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function Header() {
  let [toggle, setToggle] = useState(false);

  return (
    <header
      className="flex justify-center w-full mb-[30px] mt-[45px] md:"
      id="header">
      <div className="wrapper flex justify-between items-center">
        <Link to="/">
          <h1 className="font-black text-[40px]">
            <span className="">A</span>
            <span className="text-[#F15025]">T</span>
          </h1>
        </Link>
        <nav className="hidden sm:flex text-[16px] sm:text-[18px] w-[356px] justify-between items-center font-normal">
          <Link to="/">
            <Button
              content="Home"
              styles="border-b-[2px] border-solid border-b-[#F15025] text-[#F15025]"
            />
          </Link>
          <Button
            content="About Us"
            styles=" hover:border-b-[2px] border-solid border-b-[#F15025] hover:text-[#F15025]"
          />
          <Button
            content="Contact Us"
            styles=" hover:border-b-[2px] border-solid border-b-[#F15025] hover:text-[#F15025] "
          />
        </nav>
        <div className="hidden sm:flex relative">
          <Link to="/product/cart">
            <img
              src={cart}
              alt="Cart icon"
              className="hover:scale-110 h-[50px] w-[50px]]"
            />
          </Link>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center relative">
          <div
            onClick={() => setToggle((prev) => !prev)}
            className="cursor-pointer h-fit w-fit">
            {!toggle ? (
              <MenuIcon
                style={{ height: "28px", width: "28px", color: "#F15025" }}
              />
            ) : (
              <CloseIcon
                style={{ height: "28px", width: "28px", color: "#F15025" }}
              />
            )}
          </div>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-5 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <nav className=" flex flex-col justify-end items-center flex-1">
              <Link to="/">
                <Button
                  content="Home"
                  styles="w-full text-[#F15025] hover:bg-white font-medium"
                />
              </Link>
              <Button content="About Us" styles=" hover:bg-white font-medium" />
              <Button
                content="Contact Us"
                styles=" hover:bg-white font-medium"
              />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
