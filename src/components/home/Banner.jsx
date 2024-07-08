import { bannerImg } from "../../assets/icons-images";
import Button from "../global/Button";

function Banner() {
  return (
    <section className="flex lg:flex-nowrap justify-center gap-[15%] py-[12px] flex-wrap">
      <div className="flex flex-col gap-[16px] sm:gap-[19] lg:gap-[24px] flex-[1.3]">
        <h1 className="font-semibold text-[50px] sm:text-[80px] leading-[50px] sm:leading-[81px] tracking-[-0.06em]">
          Where Fashions Lives And Abides
        </h1>
        <p className="text-[16px] lg:text-[20px] leading-[28px] w-[80%] sm:w-[433px]">
          Our curated collection of high-quality clothing is designed to make
          you look and feel your best, no
        </p>
        <Button
          content="Shop the collection"
          styles="text-[16px] lg:text-[22px] rounded-[10px] p-[15px] bg-[#F15025] text-white font-semibold w-fit"
        />
      </div>
      <div className="flex-[1] object-cover overflow-hidden h-[450px] min-w-[300px] sm:min-w-[400px] rounded-none sm:rounded-2xl lg:rounded-none my-[20px]">
        <img src={bannerImg} alt="" className="w-full" />
      </div>
    </section>
  );
}

export default Banner;
