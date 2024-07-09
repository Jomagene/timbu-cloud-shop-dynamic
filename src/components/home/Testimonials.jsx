import { useState, useRef, useEffect } from "react";
import { testimonials } from "../../data";
import SubTitle from "../global/SubTitle";
import Testimony from "../global/Testimony";
import { motion } from "framer-motion";

function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="overflow-hidden py-[30px] border-solid border-[5px] border-[#FF5F00] bg-[#FF5F00]">
      <SubTitle
        content="Testimonials"
        style="text-white pb-[20px] text-center"
      />
      <motion.div ref={carousel} className="cursor-grab">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-[2%]">
          {testimonials.map((item) => {
            return (
              <motion.div key={item.id}>
                <Testimony
                  picture={item.picture}
                  name={item.name}
                  speech={item.speech}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Testimonials;
