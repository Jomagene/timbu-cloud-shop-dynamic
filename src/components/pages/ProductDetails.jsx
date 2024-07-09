import GridPicture from "../product-details/GridPicture";
import Details from "../product-details/Details";
import Collection from "../home/Collection";
import SubTitle from "../global/SubTitle";

function ProductDetails() {
  return (
    <main className="wrapper mb-24 overflow-hidden flex flex-col gap-5">
      <div className=" flex justify-between">
        <GridPicture />
        <Details />
      </div>
      <h1 className="text-[30px] font-medium">Other related pants</h1>
      <Collection type="men" content="pants" yes={true} />
      <h1 className="text-[30px] font-medium">Complementaries</h1>
      <Collection type="men" content="shoes" yes={true} />
    </main>
  );
}

export default ProductDetails;
