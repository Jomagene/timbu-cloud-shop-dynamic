import { Link, useNavigate } from "react-router-dom";
import { mastercard, paypal, visa } from "../../assets/icons-images";

function CartPay({ pic }) {
  const navigate = useNavigate();
  const handleClick = () =>
    navigate("/product/payment", { state: { pic: pic } });
  return (
    <div className="bg-[#E6E8E6] flex-[1] rounded-[10px] border-solid border-[1px] p-[30px] flex flex-col gap-[20px]  mt-5">
      <div className="flex justify-between border-b border-solid border-[#CED0CE] p-1 text-[10px] sm:text-[12px] lg:text-[18px] ">
        <span>Subtotal</span>
        <span>£32.99</span>
      </div>
      <div className="flex justify-between border-b border-solid border-[#CED0CE] p-1 text-[10px] sm:text-[12px] lg:text-[18px]">
        <span>Tax</span>
        <span>£1.99</span>
      </div>
      <div className="flex justify-between border-b border-solid border-[#CED0CE] p-1 text-[10px] sm:text-[12px] lg:text-[18px]">
        <span>Delivery</span>
        <span>£2.99</span>
      </div>
      <div className="flex justify-between py-2 font-semibold">
        <span className="text-[18px] lg:text-[24px]">Total</span>
        <span className="text-[18px] lg:text-[24px]">£37.99</span>
      </div>
      <div onClick={() => handleClick()}>
        <Link to="/product/payment">
          <button className="p-[10px] bg-[#F15025] rounded-md w-full text-white font-semibold text-[12px]  lg:text-[18px]">
            Check out
          </button>
        </Link>
      </div>
      <p className="font-medium  text-[12px]  lg:text-[18px]">Payment Method</p>
      <div className="flex justify-between">
        <img src={visa} alt="" className="w-[72px] lg:w-[100px] md:w-[80px]" />
        <img
          src={mastercard}
          alt=""
          className="w-[75px] lg:w-[105px] md:w-[80px] "
        />
        <img src={paypal} alt="" className="w-[60px] lg:w-[95px] md:w-[80px]" />
      </div>
    </div>
  );
}

export default CartPay;
