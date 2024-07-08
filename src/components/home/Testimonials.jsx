import { testimonials } from "../../data";
import SubTitle from "../global/SubTitle";
import Testimony from "../global/Testimony";

function Testimonials() {
  return (
    <section className="overflow-hidden py-[30px] border-solid border-[5px] border-[#FF5F00] bg-[#FF5F00]">
      <SubTitle
        content="Testimonials"
        style="text-white pb-[20px] text-center"
      />
      <div className="flex gap-[2%]">
        {testimonials.map((item) => {
          return (
            <Testimony
              key={item.id}
              picture={item.picture}
              name={item.name}
              speech={item.speech}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;
