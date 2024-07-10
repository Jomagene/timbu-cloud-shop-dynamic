import React from "react";
import CartDetail from "../cart/CartDetail";
import { pdf } from "../../assets/icons-images";

function Success() {
  return (
    <main className="wrapper mb-24 overflow-hidden flex flex-col gap-5">
      <h1 className="font-semibold text-[25px] sm:text-[30px] leading-[30px] sm:leading-[50px] tracking-[-0.06em] mb-5">
        Successful
      </h1>
      <div className="flex justify-between items-center">
        <div className="w-[50%]">
          <CartDetail yes={true} />
        </div>
        <div className="flex gap-5">
          <img src={pdf} alt="" className="h-[40px]" />
          <span>Download PDF</span>
        </div>
      </div>
    </main>
  );
}

export default Success;
