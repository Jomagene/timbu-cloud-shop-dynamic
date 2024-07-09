import { mastercard, visa } from "../../assets/icons-images";

function Payment() {
  return (
    <main className="wrapper mb-24 overflow-hidden flex flex-col gap-5">
      <h1 className="font-semibold text-[25px] sm:text-[30px] leading-[30px] sm:leading-[50px] tracking-[-0.06em] mb-5">
        Payment
      </h1>
      <section>
        <div className="flex flex-col gap-[20px]">
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
        <div></div>
      </section>
    </main>
  );
}

export default Payment;
