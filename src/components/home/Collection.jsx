import { useState, useRef, useEffect } from "react";
import Product from "../global/Product";
import Subsubtitle from "../global/Subsubtitle";
import { motion } from "framer-motion";
import { useProducts } from "../../productContext";

function Collection({ type, content, yes }) {
  const { products_datA, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
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
          {products_datA[type][content].map((item, id) => {
            return (
              <motion.div key={item.id}>
                <Product
                  picture={item.picture}
                  title={item.title}
                  price={item.price}
                  like={true}
                  id={id}
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
