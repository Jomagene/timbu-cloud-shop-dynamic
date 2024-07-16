import { favorite } from "../../assets/icons-images";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link, useNavigate } from "react-router-dom";

function Details({ pic, price }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const navigate = useNavigate();

  const handleClick = () =>
    navigate("/product/cart", { state: { pic: pic, price: price } });
  return (
    <div className="flex-[1] flex flex-col gap-[20px]">
      <div>
        <h1 className="font-normal text-[22px] pb-4">Ochild Flip</h1>
        <p className="font-medium">{`${price} NGN`}</p>
      </div>
      <div className="hidden xl:flex gap-3">
        <div className="flex-[1]">
          <img src={pic} alt="" className="rounded-[5px]" />
          <h2 className="text-center pt-[10px]">Grey</h2>
        </div>
        <div className="flex-[1]">
          <img src={pic} alt="" className="rounded-[5px]" />
          <h2 className="text-center pt-[10px]">Black</h2>
        </div>
        <div className="flex-[1]">
          <img src={pic} alt="" className="rounded-[5px]" />
          <h2 className="text-center pt-[10px]">Blue</h2>
        </div>
      </div>
      <select className="p-[5px] h-[50px] w-full text-[14px] border-solid border-[1px] rounded-[5px]">
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
        <option>XXL</option>
        <option>XXXL</option>
      </select>
      <div className="flex justify-between">
        <>
          <Button
            onClick={handleOpen}
            style={{
              fontSize: "18px",
              backgroundColor: "#F15025",
              width: "86%",
              color: "white",
              textAlign: "center",
              padding: "10px",
              borderRadius: "5px",
            }}>
            Add to cart
          </Button>
          <Dialog
            open={open}
            handler={handleOpen}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}>
            <DialogHeader
              style={{
                display: "flex",
                justifyContent: "center",
                borderBottom: "solid 1px #E1DDDD",
              }}>
              1 Item added
            </DialogHeader>
            <DialogBody
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
              }}>
              <div className="h-[200px]">
                <img src={pic} alt="" className="h-[90%]" />
              </div>
              <div className="flex flex-col gap-[7px]">
                <span className="text-[18px] font-semibold">Ochid Filip</span>
                <span className="text-[18px] font-semibold">{`${price} NGN`}</span>
                <span className="text-[18px] font-semibold">
                  Size: Medium (M)
                </span>
              </div>
            </DialogBody>
            <DialogFooter onClick={() => handleClick()}>
              <Link
                to="/product/cart"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}>
                <Button
                  onClick={handleOpen}
                  style={{
                    fontSize: "18px",
                    backgroundColor: "#F15025",
                    width: "60%",
                    color: "white",
                    textAlign: "center",
                    padding: "15px",
                    borderRadius: "5px",
                  }}>
                  Go to cart
                </Button>
              </Link>
            </DialogFooter>
          </Dialog>
        </>
        <div className="p-[6px] rounded-[5px] bg-[#E6E8E6]">
          <img src={favorite} alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <h1 className="text-[22px] font-semibold pt-5">Delivery</h1>
        <div className=" px-[20px] flex items-center justify-between bg-[#E6E8E6] h-[80px] w-full">
          <div className="flex flex-col">
            <span className="flex gap-2">
              <LocalShippingIcon />
              <span>July 7 - July 8</span>
            </span>
            <span className="text-[#F15025] font-medium">Express</span>
          </div>
          <div className="flex flex-col">
            <span className="font-normal text-[16px]">3 NGN</span>
            <span>1/2 days</span>
          </div>
        </div>
        <div className=" px-[20px] flex items-center justify-between bg-[#E6E8E6] h-[80px] w-full">
          <div className="flex flex-col">
            <span className="flex gap-2">
              <LocalShippingIcon />
              <span>July 10 - July 13</span>
            </span>
            <span className="text-[#F15025] font-medium">Standard</span>
          </div>
          <div className="flex flex-col">
            <span className="font-normal text-[16px]">3 NGN</span>
            <span>4/7 days</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
