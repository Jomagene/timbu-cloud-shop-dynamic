import { Link } from "react-router-dom";
import { mastercard, visa } from "../../assets/icons-images";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import { useState } from "react";

function Payment() {
  let [visible1, setVisible1] = useState(false);
  let [visible2, setVisible2] = useState(false);
  let [visible3, setVisible3] = useState(false);
  function handleClick1(visible) {
    setVisible1(!visible);
    setVisible2(false);
    setVisible3(false);
  }
  function handleClick2(visible) {
    setVisible2(!visible);
    setVisible1(false);
    setVisible3(false);
  }
  function handleClick3(visible) {
    setVisible3(!visible);
    setVisible1(false);
    setVisible2(false);
  }

  function Form({ visible }) {
    return (
      <div
        className={`flex-col gap-[10px] w-full ${visible ? "flex" : "hidden"}`}>
        <div>
          <p className="pb-[7px]">Card Name</p>
          <input
            type="text"
            className="bg-[#E6E8E6] h-[35px] w-full rounded-[5px] text-[12px] px-[10px] text-blue-gray-900"
          />
        </div>
        <div>
          <p className="pb-[7px]">Card Number</p>
          <input
            type="text"
            className="bg-[#E6E8E6] h-[35px] w-full rounded-[5px] text-[12px] px-[10px] text-blue-gray-900"
          />
        </div>
        <div>
          <p className="pb-[7px]">Expiry Date</p>
          <input
            type="date"
            className="bg-[#E6E8E6] h-[35px] w-full rounded-[5px] text-[12px] px-[10px] text-blue-gray-900"
          />
        </div>
        <div>
          <p className="pb-[7px]">Security Code</p>
          <input
            type="text"
            className="bg-[#E6E8E6] h-[35px] w-full rounded-[5px] text-[12px] px-[10px] text-blue-gray-900"
          />
        </div>
      </div>
    );
  }

  return (
    <main className="wrapper mb-24 overflow-hidden flex flex-col gap-5">
      <h1 className="font-semibold text-[25px] sm:text-[30px] leading-[30px] sm:leading-[50px] tracking-[-0.06em] mb-5">
        Payment
      </h1>

      <section className="flex justify-between flex-wrap">
        <div className="flex flex-col gap-[20px] w-[35%] min-w-[350px] pb-10">
          <div className="flex gap-[40px] items-start w-full">
            <span
              className={`h-[30px] w-[30px] rounded-full ${
                visible1 ? "bg-[#F15025]" : "bg-[#CED0CE]"
              }`}></span>

            <div className="flex flex-col gap-[10px] w-[73%]">
              <div
                className="flex gap-[14px] items-center cursor-pointer"
                onClick={() => handleClick1(visible1)}>
                <img src={mastercard} alt="" className="h-[40px]" />
                <span className="text-[18px]">Master card</span>
              </div>
              <Form visible={visible1} />
            </div>
          </div>
          <div className="flex gap-[40px] items-start">
            <span
              className={`h-[30px] w-[30px] rounded-full ${
                visible2 ? "bg-[#F15025]" : "bg-[#CED0CE]"
              }`}></span>
            <div className="flex flex-col gap-[10px] w-[73%]">
              <div
                className="flex gap-[14px] items-center cursor-pointer"
                onClick={() => handleClick2(visible2)}>
                <img src={visa} alt="" className="h-[40px]" />
                <span className="text-[18px]">Visa</span>
              </div>
              <Form visible={visible2} />
            </div>
          </div>
          <div className="flex gap-[40px] items-start">
            <span
              className={`h-[30px] w-[30px] rounded-full ${
                visible3 ? "bg-[#F15025]" : "bg-[#CED0CE]"
              }`}></span>
            <div className="flex flex-col gap-[10px] w-[73%]">
              <div
                className="flex gap-[14px] items-center cursor-pointer"
                onClick={() => handleClick3(visible3)}>
                <img src="/GroupPaypal.png" alt="" className="h-[25px]" />
              </div>
              <Form visible={visible3} />
            </div>
          </div>
        </div>

        <div className="w-[45%] min-w-[350px]">
          <div className="rounded-[10px] p-[30px] flex flex-col gap-[20px] bg-[#E6E8E6]">
            <div className="flex flex-col gap-[20px]">
              <h1 className="text-[#F15025] text-[16px]">
                <LocationOnIcon /> Pick up adress
              </h1>
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[16px]">Adress</h1>
                <input
                  type="text"
                  placeholder="Your adress"
                  className="bg-[#CED0CE] h-[38px] w-full rounded-[5px]"
                />

                <div className="flex gap-2">
                  <div className="flex-[1] flex flex-col justify-between">
                    <h1 className="text-[16px]">Postal code</h1>
                    <input
                      type="text"
                      placeholder="Postal code"
                      className="bg-[#CED0CE] h-[38px] w-full rounded-[5px]"
                    />
                  </div>
                  <div className="flex-[1]">
                    <h1 className="text-[16px]">City</h1>
                    <input
                      type="text"
                      placeholder="Your city"
                      className="bg-[#CED0CE] h-[38px] w-full rounded-[5px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h1 className="text-[#F15025] text-[16px]">
                <HomeIcon /> Home Adress
              </h1>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <div className="h-[30px] w-[30px] bg-[#CED0CE] rounded-full"></div>
                  <p className="w-[200px] text-[16px]">
                    Joshua flick Rue Louis andrea D chambre 69, 35700 Rennes
                    France
                  </p>
                </div>
                <CloseIcon />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <span className="h-[30px] w-[30px] bg-[#CED0CE] rounded-full"></span>
                  <span className="w-[70%] text-[16px]">New Adress</span>
                </div>

                <CreateIcon />
              </div>
            </div>
          </div>

          <div className=" rounded-[10px] p-[30px] flex flex-col gap-[20px]">
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
            <Link to="/product/payment/success">
              <button className="p-[10px] bg-[#DFDDDC] rounded-md w-full font-semibold border border-solid border-[]">
                Confirm payment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Payment;
