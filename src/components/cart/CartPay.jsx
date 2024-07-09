import { Link } from "react-router-dom";
import { mastercard, paypal, visa } from "../../assets/icons-images";

function CartPay() {
  return (
    <div className="bg-[#E6E8E6] flex-[1] rounded-[10px] border-solid border-[1px] p-[30px] flex flex-col gap-[20px]">
      <div className="flex justify-between border-b border-solid border-gray-300 p-1 ">
        <span>Subtotal</span>
        <span>£32.99</span>
      </div>
      <div className="flex justify-between border-b border-solid border-gray-300 p-1">
        <span>Tax</span>
        <span>£1.99</span>
      </div>
      <div className="flex justify-between border-b border-solid border-gray-300 p-1">
        <span>Delivery</span>
        <span>£2.99</span>
      </div>
      <div className="flex justify-between py-2 font-semibold">
        <span>Total</span>
        <span>£37.99</span>
      </div>
      <Link to="/product/payment">
        <button className="p-[10px] bg-[#F15025] rounded-md w-full text-white font-semibold ">
          Check out
        </button>
      </Link>
      <p className="font-medium">Payment Method</p>
      <div className="flex justify-between">
        <img src={visa} alt="" className="w-[60px] md:w-[80px]" />
        <img src={mastercard} alt="" className="w-[60px] md:w-[80px] " />
        <img src={paypal} alt="" className="w-[60px] md:w-[80px]" />
      </div>
    </div>
  );
}

export default CartPay;
