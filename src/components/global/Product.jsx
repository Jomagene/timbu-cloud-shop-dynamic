import { Link } from "react-router-dom";
import { favorite, pant2 } from "../../assets/icons-images";

function Product({ picture, title, price, like }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[150px] w-[100px] sm:h-[210px] sm:w-[140px] md:h-[240px] md:w-[160px] lg:h-[360px] lg:w-[240px]">
        <Link to="/product">
          <div
            className="rounded-[10px] rounded-tr-[5px] h-full w-full bg-cover"
            style={{ backgroundImage: `url(${picture})` }}></div>
        </Link>

        {like && (
          <div className="cursor-pointer hover:bg-[#d45e2f] active:bg-[#d45e2fe0] absolute top-0 right-0 bg-[#ced0ce] rounded-[5px] h-[25px] sm:h-[30px] lg:h-[40px] w-[25px] sm:w-[30px] lg:w-[40px] flex items-center justify-center">
            <img src={favorite} className="h-[30px]" />
          </div>
        )}
      </div>
      <span className="text-[15px] lg:text-[18px] my-[4px] lg:my-[6px]">
        {title}
      </span>
      <span className="text-[16px] lg:text-[20px] font-medium">{price}</span>
    </div>
  );
}

export default Product;
