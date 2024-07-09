import { useState, useRef, useEffect } from "react";
import products_data from "../../data";
import Product from "../global/Product";
import Subsubtitle from "../global/Subsubtitle";
import { motion } from "framer-motion";

function Collection({ type, content, yes }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <>
      {yes || <Subsubtitle content={content} />}
      <motion.div ref={carousel} className="cursor-grab">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-[2.5%]">
          {products_data[type][content].map((item) => {
            return (
              <motion.div key={item.id}>
                <Product
                  picture={item.picture}
                  title={item.title}
                  price={item.price}
                  like={true}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Collection;
