import { useLocation } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import CartPay from "../cart/CartPay";

function Cart() {
  const location = useLocation();
  const picture = location.state.pic;
  return (
    <main className="wrapper mb-24">
      <h1 className="font-semibold text-[35px] sm:text-[50px] leading-[30px] sm:leading-[50px] tracking-[-0.06em] mt-10 mb-5">
        My Cart
      </h1>
      <section className="flex lg:flex-row flex-col gap-[5%] h-fit">
        <CartDetail pic={picture} />
        <CartPay pic={picture} />
      </section>
    </main>
  );
}

export default Cart;
