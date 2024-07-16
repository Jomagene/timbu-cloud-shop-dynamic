import { Link, useLocation, useNavigate } from "react-router-dom";
import { mastercard, visa } from "../../assets/icons-images";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import { useState } from "react";

function Payment() {
  const [visible, setVisible] = useState("");
  const location = useLocation();
  const pic = location.state.pic;

  const navigate = useNavigate();
  function handleClick() {
    navigate("/product/payment/success", { state: { pic: pic } });
  }

  const paymentMethods = {
    mc: "Master card",
    vs: "Visa",
    pp: "PayPal",
  };

  const Form = () => (
    <div className="flex-col gap-[18px] w-full flex">
      <div className="flex flex-col gap-1">
        <p className="text-[10px] md:text-[14px]">Card Name</p>
        <input
          type="text"
          className="bg-[#E6E8E6] h-[47px] w-full rounded-[5px] md:rounded-[10px] text-[12px] px-[10px] text-blue-gray-900"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[10px] md:text-[14px]">Card Number</p>
        <input
          type="text"
          className="bg-[#E6E8E6] h-[47px] w-full rounded-[5px] md:rounded-[10px] text-[12px] px-[10px] text-blue-gray-900"
          required
        />
      </div>
      <div className="flex sm:flex-col gap-[15%] sm:gap-1">
        <div className="flex flex-col gap-1">
          <p className="text-[10px] md:text-[14px]">Expiry Date</p>
          <input
            type="date"
            className="bg-[#E6E8E6] h-[47px] w-full  rounded-[5px] md:rounded-[10px] text-[10px] sm:text-[12px] px-[10px] text-blue-gray-900"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[10px] md:text-[14px]">Security Code</p>
          <input
            type="password"
            className="bg-[#E6E8E6] h-[47px] w-full  rounded-[5px] md:rounded-[10px] text-[12px] px-[10px] text-blue-gray-900"
            required
          />
        </div>
      </div>
    </div>
  );

  const PaymentOption = ({ method, icon, altText }) => (
    <div className="flex gap-[50px]  md:gap-[36px] lg:gap-[50px] items-start">
      <span
        className={`h-[25px] w-[25px] sm:h-[30px] sm:w-[30px] rounded-full ${
          visible === method ? "bg-[#F15025]" : "bg-[#CED0CE]"
        }`}></span>
      <div className="flex flex-col gap-[10px] grow-[1]">
        <div
          className="flex gap-[10px] md:gap-[14px] items-center cursor-pointer"
          onClick={() => setVisible(method)}>
          <img src={icon} alt={altText} className="h-[23px]" />
          <span className="text-[12px] md:text-[14px] lg:text-[18px]">
            {method == "pp" || paymentMethods[method]}
          </span>
        </div>
        {visible === method && <Form />}
      </div>
    </div>
  );

  return (
    <form className="wrapper mb-24 overflow-hidden flex flex-col gap-5">
      <h1 className="font-semibold text-[24px] md:text-[36px] lg:text-[48px] leading-[36px] md:leading-[54px] lg:leading-[72px] tracking-[-0.06em]">
        Payment
      </h1>

      <section className="flex justify-between custom_900:gap-[10%] flex-wrap">
        <div className="flex flex-col gap-[20px] flex-[1] min-w-[350px] pb-10">
          <PaymentOption method="mc" icon={mastercard} altText="Master card" />
          <PaymentOption method="vs" icon={visa} altText="Visa" />
          <PaymentOption method="pp" icon="/GroupPaypal.png" altText="PayPal" />
        </div>

        <div className="flex-[1] min-w-[350px]">
          <div className="rounded-[10px] p-[30px] flex flex-col gap-[20px] bg-[#E6E8E6]">
            <div className="flex flex-col gap-[20px]">
              <h1 className="text-[#F15025] text-[12px] sm:text-[16px]">
                <LocationOnIcon style={{ height: "20px" }} /> Pick up address
              </h1>
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[10px] md:text-[12px] lg:text-[14px]">
                  Address
                </h1>
                <input
                  type="text"
                  placeholder="Your address"
                  className="bg-[#CED0CE] h-[38px] w-full rounded-[5px] text-[10px] md:text-[12px] lg:text-[14px]"
                />

                <div className="flex gap-[10px]">
                  <div className="flex-[1] flex flex-col gap-[8px]">
                    <h1 className="text-[10px] md:text-[12px] lg:text-[14px]">
                      Postal code
                    </h1>
                    <input
                      type="text"
                      placeholder="Postal code"
                      className="bg-[#CED0CE] h-[38px] w-full rounded-[5px] text-[10px] md:text-[12px] lg:text-[14px]"
                    />
                  </div>
                  <div className="flex-[1] flex flex-col gap-[8px]">
                    <h1 className="text-[10px] md:text-[12px] lg:text-[14px]">
                      City
                    </h1>
                    <input
                      type="text"
                      placeholder="Your city"
                      className="bg-[#CED0CE] h-[38px] w-full rounded-[5px] text-[10px] md:text-[12px] lg:text-[14px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h1 className="text-[#F15025] text-[12px] sm:text-[16px]">
                <HomeIcon style={{ height: "20px" }} /> Home Address
              </h1>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <span className="h-[25px] w-[25px] sm:h-[30px] sm:w-[30px] bg-[#CED0CE] rounded-full"></span>
                  <p className="w-[100px] sm:w-[200px] text-[10px] sm:text-[14px]">
                    Joshua flick Rue Louis Andrea D Chambre 69, 35700 Rennes
                    France
                  </p>
                </div>
                <CloseIcon />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <span className="h-[25px] w-[25px] sm:h-[30px] sm:w-[30px] bg-[#CED0CE] rounded-full"></span>
                  <p className="w-[70%] text-[10px] sm:text-[14px]">
                    New Address
                  </p>
                </div>
                <CreateIcon />
              </div>
            </div>
          </div>

          <div className="rounded-[10px] p-[30px] flex flex-col gap-[20px]">
            <div className="flex justify-between border-b border-solid border-gray-300 p-1 text-[10px] sm:text-[14px] lg:text-[18px]">
              <span>Subtotal</span>
              <span>£32.99</span>
            </div>
            <div className="flex justify-between border-b border-solid border-gray-300 p-1 text-[10px] sm:text-[14px] lg:text-[18px]">
              <span>Tax</span>
              <span>£1.99</span>
            </div>
            <div className="flex justify-between border-b border-solid border-gray-300 p-1 text-[10px] sm:text-[14px] lg:text-[18px]">
              <span>Delivery</span>
              <span>£2.99</span>
            </div>
            <div className="flex justify-between py-2 font-semibold text-[14px] sm:text-[20px] lg:text-[24px]">
              <span>Total</span>
              <span>£37.99</span>
            </div>
            <div onClick={() => handleClick()}>
              <Link to="/product/payment/success">
                <button
                  className={`p-[10px] ${
                    visible ? "bg-[#F15025] text-white" : "bg-[#DFDDDC]"
                  } rounded-md w-full font-semibold border border-solid text-[14px] sm:text-[18px]`}
                  type="submit">
                  Confirm payment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}

export default Payment;
