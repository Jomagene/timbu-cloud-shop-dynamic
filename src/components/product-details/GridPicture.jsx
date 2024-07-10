import { black_pant2, blue_pant2, pant2 } from "../../assets/icons-images";

export default function GridPicture() {
  return (
    <>
      <div className="hidden sm:flex lg:hidden flex-[1]  w-[100%] gap-[10px]">
        <div className="flex flex-[1] flex-col h-full gap-[10px]">
          <img src={pant2} alt="" className="h-[20%]" />
          <img src={pant2} alt="" className="flex-[1]" />
          <img src={pant2} alt="" className="flex-[1]" />
        </div>
        <div className="flex-[4] h-full">
          <img src={pant2} alt="" className="w-full" />
        </div>
        <div className="flex flex-col flex-[1] gap-[10px] h-[300px]">
          <div className="flex-[1]">
            <img src={pant2} alt="" className="rounded-[5px]" />
            <h2 className="text-center text-[14px]">Grey</h2>
          </div>
          <div className="flex-[1]">
            <img src={black_pant2} alt="" className="rounded-[5px]" />
            <h2 className="text-center text-[14px]">Black</h2>
          </div>
          <div className="flex-[1]">
            <img src={blue_pant2} alt="" className="rounded-[5px]" />
            <h2 className="text-center text-[14px]">Blue</h2>
          </div>
        </div>
      </div>

      <div className="flex sm:hidden flex-[1]  gap-[10px] max-w-[550px]">
        <div className="flex flex-[1] flex-col h-[480px] justify-between">
          <img src={pant2} alt="" className="h-[32%]" />
          <img src={pant2} alt="" className="h-[32%]" />
          <img src={pant2} alt="" className="h-[32%]" />
        </div>
        <div className="flex-[4] flex flex-col gap-[10px]">
          <img src={pant2} alt="" className="h-[480px]" />
          <div className="flex flex-[1] gap-[10px] h-[300px]">
            <div className="flex-[1]">
              <img src={pant2} alt="" className="rounded-[5px]" />
              <h2 className="text-center text-[14px]">Grey</h2>
            </div>
            <div className="flex-[1]">
              <img src={black_pant2} alt="" className="rounded-[5px]" />
              <h2 className="text-center text-[14px]">Black</h2>
            </div>
            <div className="flex-[1]">
              <img src={blue_pant2} alt="" className="rounded-[5px]" />
              <h2 className="text-center text-[14px]">Blue</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-[1]  gap-[10px]">
        <div className="flex flex-[1] flex-col h-[480px] justify-between">
          <img src={pant2} alt="" className="h-[32%]" />
          <img src={pant2} alt="" className="h-[32%]" />
          <img src={pant2} alt="" className="h-[32%]" />
        </div>
        <div className="flex-[4] h-[480px]">
          <img src={pant2} alt="" className="h-full" />
        </div>
      </div>
    </>
  );
}
