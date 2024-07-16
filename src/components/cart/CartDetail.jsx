function CartDetail({ yes, pic, price }) {
  console.log(price);
  return (
    <div
      className={`flex flex-[1] justify-between rounded-[10px] border-solid  ${
        yes || "border-[1px] border-[#CED0CE] mt-5"
      } py-[20px] px-[10px]`}>
      <div className="flex gap-[10px] lg:gap-[20px] flex-[1]">
        <div className="flex-[1] flex flex-col items-center">
          <div className="h-[110px] w-[110px] lg:w-[150px] lg:h-[150px] object-cover object-bottom rounded-lg overflow-hidden">
            <img src={pic} alt="" className="" />
          </div>
          <h1 className="font-medium text-[14px] sm:text-[18px] lg:text-[24px] pt-5">
            Ochild Flip
          </h1>
        </div>
        <div className="w-[150px] flex flex-col gap-[15px]">
          <p className="text-[10px] sm:text-[12px] lg:text-[14px]">
            Color : Gray{" "}
          </p>
          <p className="text-[10px] sm:text-[12px] lg:text-[14px]">
            Delivery : Standard Huly 10 - July 13
          </p>
          <p className="text-[10px] sm:text-[12px] lg:text-[14px]">
            Size: Medium (M)
          </p>
          {!yes ? (
            <select className="p-[10px] w-full text-[10px] sm:text-[12px] lg:text-[14px] border-solid border-[1px] rounded-[5px]">
              <option>Qty 1</option>
              <option>Qty 2</option>
              <option>Qty 3</option>
              <option>Qty 4</option>
              <option>Qty 5</option>
              <option>Qty 6</option>
              <option>Qty 7</option>
              <option>Qty 8</option>
              <option>Qty 0</option>
              <option>Qty 10</option>
            </select>
          ) : (
            <div className="flex-[0.5]">
              <p className="font-semibold">{`${price} NGN`}</p>
            </div>
          )}
        </div>
      </div>
      {!yes ? (
        <div className="grow-[1]">
          <p className="font-semibold text-[#F15025] text-right">{`${price} NGN`}</p>
          <p className="font-semibold line-through text-right">£87.99</p>
        </div>
      ) : (
        <div className="grow-[1]"></div>
      )}
    </div>
  );
}

export default CartDetail;
