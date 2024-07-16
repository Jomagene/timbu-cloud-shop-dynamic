import GridPicture from "../product-details/GridPicture";
import Details from "../product-details/Details";
import Collection from "../home/Collection";
import ReturnToTopButton from "../global/ReturnToTop";
import { useLocation } from "react-router-dom";
import { useProducts } from "../../productContext";

function ProductDetails() {
  const { products_datA, loading, error } = useProducts();

  const location = useLocation();
  let { id, type, content } = location.state;
  const element = products_datA[type][content].filter((item) => item.id == id);

  console.log(element);

  const [pic, pic1, pic2, pic3] = [
    element[0].picture,
    element[0].pic1,
    element[0].pic2,
    element[0].pic3,
  ];
  return (
    <main className="wrapper mb-24 overflow-hidden flex flex-col gap-5">
      <div className=" flex flex-col lg:flex-row justify-between">
        <GridPicture pic={pic} pic1={pic1} pic3={pic3} pic2={pic2} />
        <Details pic={pic} />
      </div>
      <h1 className="text-[30px] font-medium">Other related pants</h1>
      <Collection type="men" content="pants" yes={true} />
      <h1 className="text-[30px] font-medium">Complementaries</h1>
      <Collection type="men" content="shoes" yes={true} />
      <ReturnToTopButton />
    </main>
  );
}

export default ProductDetails;
