import { bannerImg } from "../../assets/icons-images";
import Button from "../global/Button";

function Banner() {
  return (
    <section className="flex lg:flex-nowrap gap-[15%] py-[12px] flex-wrap">
      <div className="flex flex-col gap-[20px] sm:gap-[19px] lg:gap-[24px] flex-[2] items-center md:items-start pt-[20px]">
        <h1 className="font-semibold text-[40px] md:text-[56px] lg:text-[82px] leading-[53px] md:leading-[62px] lg:leading-[91px] tracking-[-6%] text-center md:text-left">
          Where Fashions Lives And Abides
        </h1>
        <p className="text-[16px] lg:text-[20px] leading-[28px] w-[88%] sm:w-[433px] text-center md:text-justify">
          Our curated collection of high-quality clothing is designed to make
          you look and feel your best, no
        </p>
        <Button
          content="Shop the collection"
          styles="text-[14px] lg:text-[22px] rounded-[10px] p-[12px] md:p-[20px] bg-[#F15025] hover:bg-[#f15125e0] text-white font-semibold w-[276px] md:w-fit"
        />
      </div>
      <div className="flex-[1] object-contain overflow-hidden h-[470px] min-w-[280px] sm:min-w-[400px] rounded-none sm:rounded-2xl lg:rounded-none my-[20px] w-full">
        <img
          src={bannerImg}
          alt=""
          className="w-full hover:scale-110 transition-all"
        />
      </div>
    </section>
  );
}

export default Banner;
