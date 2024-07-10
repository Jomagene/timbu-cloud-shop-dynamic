import { pant2 } from "../../assets/icons-images";

function CartDetail({ yes }) {
  return (
    <div
      className={`flex flex-[1] rounded-[10px] border-solid ${
        yes || "border-[1px]"
      } py-[20px] px-[10px] gap-[30px]`}>
      <div className="flex-[1.2] text-center">
        <img src={pant2} alt="" className="w-full rounded-lg" />
        <h1 className="font-normal text-[18px] pt-5">Ochild Flip</h1>
      </div>
      <div className="flex-[1.5] flex flex-col gap-[15px]">
        <p>Delivery : Standard Huly 10 - July 13</p>
        <p>Color : Gray </p>
        <p>Size: Medium (M)</p>
        {!yes ? (
          <select className="p-[10px] w-full text-[14px] border-solid border-[1px] rounded-[5px]">
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
            <p className="font-semibold">£32.99</p>
          </div>
        )}
      </div>
      {yes || (
        <div className="flex-[0.5]">
          <p className="font-semibold text-[#F15025]">£32.99</p>
          <p className="font-semibold line-through">£87.99</p>
        </div>
      )}
    </div>
  );
}

export default CartDetail;
