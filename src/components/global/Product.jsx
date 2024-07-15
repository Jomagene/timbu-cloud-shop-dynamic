import { Link, useNavigate } from "react-router-dom";
import { favorite } from "../../assets/icons-images";

function Product({ picture, title, price, like, id, type, content }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/product", { state: { id: id, type: type, content: content } });
  }
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[150px] w-[100px] sm:h-[210px] sm:w-[140px] md:h-[240px] md:w-[160px] lg:h-[360px] lg:w-[240px]">
        <div
          className="rounded-[10px] rounded-tr-[5px] h-full w-full object-contain"
          onClick={() => handleClick()}>
          <Link to="/product">
            <img src={picture} alt="" className="h-full w-auto" />
          </Link>
        </div>

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
