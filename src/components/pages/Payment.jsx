import { Link } from "react-router-dom";
import { mastercard, visa } from "../../assets/icons-images";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";

function Payment() {
  return (
    <main className="wrapper mb-24 overflow-hidden flex flex-col gap-5">
      <h1 className="font-semibold text-[25px] sm:text-[30px] leading-[30px] sm:leading-[50px] tracking-[-0.06em] mb-5">
        Payment
      </h1>

      <section className="flex justify-between">
        <div className="flex flex-col gap-[20px] w-[35%]">
          <div className="flex gap-[50px] items-center">
            <span className="h-[30px] w-[30px] rounded-full bg-[#CED0CE]"></span>
            <div className="flex gap-[14px] items-center">
              <img src={mastercard} alt="" className="h-[40px]" />
              <span className="text-[18px]">Master card</span>
            </div>
          </div>
          <div className="flex gap-[50px] items-center">
            <span className="h-[30px] w-[30px] rounded-full bg-[#CED0CE]"></span>
            <div className="flex gap-[14px] items-center">
              <img src={visa} alt="" className="h-[30px]" />
              <span className="text-[18px]">Visa</span>
            </div>
          </div>
          <div className="flex gap-[50px] items-center">
            <span className="h-[30px] w-[30px] rounded-full bg-[#CED0CE]"></span>
            <div className="flex items-center">
              <img src="/GroupPaypal.png" alt="" className="h-[25px]" />
            </div>
          </div>
        </div>

        <div className="w-[45%]">
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

                <div className="flex gap-[20%]">
                  <div className="flex-[1] flex flex-col gap-[10px]">
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
                <div className="flex gap-10">
                  <div className="h-[30px] w-[30px] bg-[#CED0CE] rounded-full"></div>
                  <p className="w-[200px] text-[16px]">
                    Joshua flick Rue Louis andrea D chambre 69, 35700 Rennes
                    France
                  </p>
                </div>
                <CloseIcon />
              </div>
              <div className="flex justify-between">
                <span className="h-[30px] w-[30px] bg-[#CED0CE] rounded-full"></span>
                <span className="w-[70%] text-[16px]">New Adress</span>

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
