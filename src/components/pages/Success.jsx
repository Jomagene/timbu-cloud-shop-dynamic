import CartDetail from "../cart/CartDetail";
import { pdf } from "../../assets/icons-images";
import { useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();
  const pic = location.state.pic;
  return (
    <main className="wrapper mb-24 overflow-hidden flex flex-col">
      <h1 className="font-semibold text-[25px] sm:text-[30px] leading-[30px] sm:leading-[50px] tracking-[-0.06em] mb-5">
        Successful
      </h1>
      <div className="flex flex-col sm:flex-row justify-between items-start">
        <div className="w-[50%]">
          <CartDetail yes={true} pic={pic} />
        </div>
        <div className="flex gap-5 py-5 text-[10px] sm:text-[14px] lg:text-[18px]">
          <img
            src={pdf}
            alt=""
            className="h-[15px] sm:h-[30px] lg:h-[35px] w-auto"
          />
          <a href="#" className="">
            Download PDF
          </a>
        </div>
      </div>
    </main>
  );
}

export default Success;
