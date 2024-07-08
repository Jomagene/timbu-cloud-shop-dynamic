import products_data from "../../data";
import Product from "../global/Product";
import Subsubtitle from "../global/Subsubtitle";

function Collection({ type, content }) {
  return (
    <>
      <Subsubtitle content={content} />
      <div className="flex gap-[2.5%]">
        {products_data[type][content].map((item) => {
          return (
            <Product
              key={item.id}
              picture={item.picture}
              title={item.title}
              price={item.price}
              like={true}
            />
          );
        })}
      </div>
    </>
  );
}

export default Collection;
