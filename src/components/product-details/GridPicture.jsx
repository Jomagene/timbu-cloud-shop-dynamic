import { pant2 } from "../../assets/icons-images";

export default function GridPicture() {
  return (
    <div className="flex-[1] flex gap-[10px]">
      <div className="flex flex-[1] flex-col h-[480px] justify-between">
        <img src={pant2} alt="" className="h-[32%]" />
        <img src={pant2} alt="" className="h-[32%]" />
        <img src={pant2} alt="" className="h-[32%]" />
      </div>
      <div className="flex-[4] h-[480px]">
        <img src={pant2} alt="" className="h-full" />
      </div>
    </div>
  );
}
