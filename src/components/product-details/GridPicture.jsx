export default function GridPicture({ pic, pic1, pic2, pic3 }) {
  return (
    <>
      <div className="hidden sm:flex xl:hidden flex-[1]  w-[100%] gap-[10px]">
        <div className="flex flex-[1] flex-col h-full gap-[10px]">
          <img src={pic} alt="" className="h-[20%]" />
          <img src={pic} alt="" className="flex-[1]" />
          <img src={pic} alt="" className="flex-[1]" />
        </div>
        <div className="flex-[4] h-full">
          <img src={pic} alt="" className="w-full" />
        </div>
        <div className="flex flex-col flex-[1] gap-[10px] h-[300px]">
          <div className="flex-[1]">
            <img src={pic1} alt="" className="rounded-[5px]" />
            <h2 className="text-center text-[14px]">Grey</h2>
          </div>
          <div className="flex-[1]">
            <img src={pic2} alt="" className="rounded-[5px]" />
            <h2 className="text-center text-[14px]">Black</h2>
          </div>
          <div className="flex-[1]">
            <img src={pic3} alt="" className="rounded-[5px]" />
            <h2 className="text-center text-[14px]">Blue</h2>
          </div>
        </div>
      </div>

      <div className="flex sm:hidden flex-[1]  gap-[10px] max-w-[550px]">
        <div className="flex flex-[1] flex-col h-[480px] justify-between">
          <img src={pic} alt="" className="h-[32%]" />
          <img src={pic} alt="" className="h-[32%]" />
          <img src={pic} alt="" className="h-[32%]" />
        </div>
        <div className="flex-[4] flex flex-col gap-[10px]">
          <img src={pic} alt="" className="h-[480px]" />
          <div className="flex flex-[1] gap-[10px] h-[300px]">
            <div className="flex-[1]">
              <img src={pic1} alt="" className="rounded-[5px]" />
              <h2 className="text-center text-[14px]">Grey</h2>
            </div>
            <div className="flex-[1]">
              <img src={pic2} alt="" className="rounded-[5px]" />
              <h2 className="text-center text-[14px]">Black</h2>
            </div>
            <div className="flex-[1]">
              <img src={pic3} alt="" className="rounded-[5px]" />
              <h2 className="text-center text-[14px]">Blue</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex flex-[1]  gap-[10px]">
        <div className="flex flex-[1] flex-col h-[480px] justify-between">
          <img src={pic1} alt="" className="h-[32%]" />
          <img src={pic2} alt="" className="h-[32%]" />
          <img src={pic3} alt="" className="h-[32%]" />
        </div>
        <div className="flex-[4] h-[480px]">
          <img src={pic} alt="" className="h-full" />
        </div>
      </div>
    </>
  );
}
