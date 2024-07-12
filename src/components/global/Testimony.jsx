import React from "react";
import StarIcon from "@mui/icons-material/Star";

function Testimony({ picture, name, speech }) {
  return (
    <div className="flex flex-col gap:10px justify-between bg-white  rounded-[10px] lg:p-[20px] md:p-[12px] p-[5px] h-full">
      <div className="flex flex-col gap-[10px] w-[140px] md:w-[180px] lg:w-[270px]">
        <div className="flex gap-[20px] flex-wrap items-center ">
          <div className="flex items-center justify-center w-[40px] border-[5px] border-solid border-[#D9D9D9] h-[40px] object-contain rounded-full overflow-hidden">
            <img src={picture} alt="" className="h-[40px] w-[auto]" />
          </div>
          <h1>{name}</h1>
        </div>
        <span className="text-[10px] md:text-[12px] lg:text-[18px]">
          {speech}
        </span>
      </div>
      <div className="text-[18px] lg:text-[24px] flex gap-3">
        {[1, 2, 3, 4].map((e) => (
          <StarIcon
            key={e}
            style={{ color: "#FF5F00", width: "10%", height: "auto" }}
          />
        ))}
        <StarIcon style={{ color: "#D9D9D9", width: "10%", height: "auto" }} />
      </div>
    </div>
  );
}

export default Testimony;
