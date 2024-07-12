import Button from "../global/Button";
import Title from "../global/Title";

function Ancors() {
  return (
    <section className="flex flex-col sm:flex-row items-center sm:justify-between border-b border-solid border-gray-200 sm:border-none py-[12px] gap-2">
      <Title title="Categories" />
      <div className="flex text-white gap-[24px] md:gap-[35px] w-fit">
        <a href="#men">
          <Button
            content="Men"
            styles="hover:bg-[#F15025] transition-all active:bg-[#c0401df1] bg-black text-[15px] lg:text-[18px]"
          />
        </a>
        <a href="#women">
          <Button
            content="Women"
            styles="hover:bg-[#F15025] transition-all active:bg-[#c0401df1] bg-black text-[15px] lg:text-[18px]"
          />
        </a>
        <a href="#kids">
          <Button
            content="Children"
            styles="hover:bg-[#F15025] transition-all active:bg-bg-[#c0401df1] bg-black text-[15px] lg:text-[18px]"
          />
        </a>
      </div>
    </section>
  );
}

export default Ancors;
