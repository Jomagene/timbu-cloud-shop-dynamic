import {
  black_pant2,
  blue_pant2,
  favorite,
  pant2,
} from "../../assets/icons-images";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";

function Details() {
  return (
    <div className="flex-[1] flex flex-col gap-[20px]">
      <div>
        <h1 className="font-normal text-[22px] pb-4">Ochild Flip</h1>
        <p className="font-medium">£32.99</p>
      </div>
      <div className="flex gap-3">
        <div className="flex-[1]">
          <img src={pant2} alt="" className="rounded-[5px]" />
          <h2 className="text-center pt-[10px]">Grey</h2>
        </div>
        <div className="flex-[1]">
          <img src={black_pant2} alt="" className="rounded-[5px]" />
          <h2 className="text-center pt-[10px]">Black</h2>
        </div>
        <div className="flex-[1]">
          <img src={blue_pant2} alt="" className="rounded-[5px]" />
          <h2 className="text-center pt-[10px]">Blue</h2>
        </div>
      </div>
      <select className="p-[5px] h-[50px] w-full text-[14px] border-solid border-[1px] rounded-[5px]">
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
        <option>XXL</option>
        <option>XXXL</option>
      </select>
      <div className="flex justify-between">
        <button className="text-[18px] w-[86%] bg-[#F15025] text-white text-center p-[10px] rounded-[5px]">
          Add to cart
        </button>
        <div className="p-[6px] rounded-[5px] bg-[#E6E8E6]">
          <img src={favorite} alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <h1 className="text-[22px] font-semibold pt-5">Delivery</h1>
        <div className=" px-[20px] flex items-center justify-between bg-[#E6E8E6] h-[80px] w-full">
          <div className="flex flex-col">
            <span className="flex gap-2">
              <LocalShippingIcon />
              <span>July 7 - July 8</span>
            </span>
            <span className="text-[#F15025] font-medium">Express</span>
          </div>
          <div className="flex flex-col">
            <span className="font-normal text-[16px]">£2.99</span>
            <span>1/2 days</span>
          </div>
        </div>
        <div className=" px-[20px] flex items-center justify-between bg-[#E6E8E6] h-[80px] w-full">
          <div className="flex flex-col">
            <span className="flex gap-2">
              <LocalShippingIcon />
              <span>July 10 - July 13</span>
            </span>
            <span className="text-[#F15025] font-medium">Standard</span>
          </div>
          <div className="flex flex-col">
            <span className="font-normal text-[16px]">£2.99</span>
            <span>4/7 days</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
