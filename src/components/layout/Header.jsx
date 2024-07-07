import { cart, favorite, profile } from "../../assets/icons-images";
import Button from "../global/Button";

function Header() {
  return (
    <header className="flex justify-center w-full pt-10 pb-5">
      <div className="wrapper flex justify-between items-center">
        <h1 className="font-black text-[40px]">
          <span className="">A</span>
          <span className="text-[#F15025]">T</span>
        </h1>
        <nav className="text-[18px] flex gap-7 items-center">
          <Button
            content="Home"
            styles="border-[1px] border-solid border-[#E6E8E6] text-[#F15025]"
          />
          <Button content="About Us" />
          <Button content="Contact Us" />
        </nav>
        <div className="flex gap-5">
          <img src={favorite} alt="" />
          <img src={cart} alt="" />
          <div className="h-[50px] w-[50px] object-cover overflow-hidden rounded-full">
            <img src={profile} alt="" className="h-[100%]" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
