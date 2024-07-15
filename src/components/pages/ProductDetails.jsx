import GridPicture from "../product-details/GridPicture";
import Details from "../product-details/Details";
import Collection from "../home/Collection";
import ReturnToTopButton from "../global/ReturnToTop";
import { useLocation } from "react-router-dom";
import { useProducts } from "../../productContext";

function ProductDetails() {
  const { products_datA, loading, error } = useProducts();
  const location = useLocation();

  console.log(location.state);
  console.log(products_datA);
  return (
    <main className="wrapper mb-24 overflow-hidden flex flex-col gap-5">
      <div className=" flex flex-col lg:flex-row justify-between">
        <GridPicture />
        <Details />
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
