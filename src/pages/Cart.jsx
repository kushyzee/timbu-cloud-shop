import { MdNavigateBefore } from "react-icons/md";
import { Link } from "react-router-dom";
import products from "../assets/productList";
import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";

const Cart = () => {
  const product = products[0];
  return (
    <section className="text-base text-customGray-800">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-3 -ml-2">
          <Link to="/">
            <MdNavigateBefore className="inline-block text-2xl" />
          </Link>
          <h1 className="font-semibold">Cart</h1>
        </div>
        <p className="text-sm font-medium">1 item</p>
      </div>

      <div>
        <div
          className="border-2 font-sm border-customGray-300 rounded-[10px] flex gap-2 items-center p-4 mb-2"
        >
          <div className="aspect-square h-28">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="">
            <p className="font-semibold">{product.name}</p>
            <p className="text-customRed font-medium text-xs">{product.price}</p>
            <div className="flex items-center justify-between gap-2 border-2 py-1 px-2 mt-4 rounded-md">
              <HiMinusSmall className="inline-block text-xl" />
              <p>1</p>
              <HiPlusSmall className="inline-block text-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
