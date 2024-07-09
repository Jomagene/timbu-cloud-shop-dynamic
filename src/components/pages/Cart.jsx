import { mastercard, pant2, paypal, visa } from "../../assets/icons-images";
import SubTitle from "../global/SubTitle";

function Cart() {
  return (
    <main className="wrapper mb-24">
      <h1 className="font-semibold text-[35px] sm:text-[50px] leading-[30px] sm:leading-[50px] tracking-[-0.06em] mb-5">
        My Cart
      </h1>
      <section className="flex gap-[5%] h-fit">
        <div className="flex flex-[1] rounded-[10px] border-solid border-[1px] py-[20px] px-[10px] gap-[30px]">
          <div className="flex-[1.2] text-center">
            <img src={pant2} alt="" className="w-full rounded-lg" />
            <h1 className="font-normal text-[18px] pt-5">Ochild Flip </h1>
          </div>
          <div className="flex-[1.5] flex flex-col gap-[20px]">
            <p>Delivery : Standard Huly 10 - July 13</p>
            <p>Color : Gray </p>
            <p>Size: Medium (M)</p>
            <select className="p-[5px] w-[120px] text-[14px] border-solid border-[1px] rounded-[5px]">
              <option>Qty 1</option>
              <option>Qty 2</option>
              <option>Qty 3</option>
              <option>Qty 4</option>
              <option>Qty 5</option>
              <option>Qty 6</option>
              <option>Qty 7</option>
              <option>Qty 8</option>
              <option>Qty 0</option>
              <option>Qty 10</option>
            </select>
          </div>
          <div className="flex-[0.5]">
            <p className="font-semibold text-[#F15025]">£32.99</p>
            <p className="font-semibold line-through">£87.99</p>
          </div>
        </div>
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
          <button className="p-1 bg-[#F15025] rounded-md w-full text-white font-semibold ">
            Check out
          </button>
          <p className="font-medium">Payment Method</p>
          <div className="flex justify-between">
            <img src={visa} alt="" className="w-[100px]" />
            <img src={mastercard} alt="" className="w-[100px]" />
            <img src={paypal} alt="" className="w-[100px]" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cart;
