import { useState, useRef, useEffect } from "react";
import { testimonials } from "../../data";
import Testimony from "../global/Testimony";
import { motion } from "framer-motion";

function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="overflow-hidden py-[5px] md:py-[15px] lg:py-[20px] border-solid border-[5px] border-[#FF5F00] bg-[#FF5F00]">
      <h3
        className={`text-[16px] md:text-[20px] lg:text-[32px] text-center text-white pb-[20px] font-medium`}>
        Testimonials
      </h3>

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
