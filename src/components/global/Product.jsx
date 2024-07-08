import { favorite } from "../../assets/icons-images";

function Product({ picture, title, price, like }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[175px] md:h-[200px] lg:h-[250px] w-[140px] md:w-[160px] lg:w-[200px]">
        <img
          src={picture}
          alt=""
          className="rounded-[10px] rounded-tr-[5px] h-full w-full"
        />
        {like && (
          <div className="absolute top-0 right-0 bg-[#ced0ce] rounded-[5px] h-[25px] sm:h-[30px] lg:h-[40px] w-[25px] sm:w-[30px] lg:w-[40px] flex items-center justify-center">
            <img src={favorite} className="h-[30px]" />
          </div>
        )}
      </div>
      <span className="text-[15px] lg:text-[18px] my-[5px] lg:my-[8px]">
        {title}
      </span>
      <span className="text-[18px] lg:text-[24px] font-medium">{price}</span>
    </div>
  );
}

export default Product;
