import StarIcon from "@mui/icons-material/Star";

function Testimony({ picture, name, speech }) {
  return (
    <div className="flex flex-col gap:10px justify-between bg-white  rounded-[10px] p-[20px] h-full">
      <div className="flex flex-col gap-[10px] w-[200px] md:w-[220px] lg:w-[270px]">
        <div className="flex gap-[20px] items-center ">
          <div className="flex items-center justify-center w-[40px] border-[5px] border-solid border-[#D9D9D9] h-[40px] object-cover rounded-full overflow-hidden">
            <img src={picture} alt="" className="h-[40px] w-[auto]" />
          </div>
          <h1>{name}</h1>
        </div>
        <span className="text-[15px] lg:text-[18px] my-[5px] lg:my-[8px]">
          {speech}
        </span>
      </div>
      <div className="text-[18px] lg:text-[24px] flex gap-3">
        <StarIcon style={{ color: "#FF5F00" }} />
        <StarIcon style={{ color: "#FF5F00" }} />
        <StarIcon style={{ color: "#FF5F00" }} />
        <StarIcon style={{ color: "#FF5F00" }} />
        <StarIcon style={{ color: "#D9D9D9" }} />
      </div>
    </div>
  );
}

export default Testimony;
