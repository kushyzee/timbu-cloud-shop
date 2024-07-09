import products from "../assets/productList";
import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import OrderSummary from "./OrderSummary";
import PageLabel from "../components/PageLabel";

const Cart = () => {
  const product = products[0];
  return (
    <section className="text-base text-customGray-800">
      <div className="flex justify-between items-center mb-5">
        <PageLabel name="Cart" page="/" />
        <p className="text-sm font-medium">1 item</p>
      </div>

      <div className="border-2 font-sm border-customGray-300 rounded-[10px] flex gap-2 items-center justify-start p-2.5 mb-2">
        <div className="aspect-square h-28">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="">
          <p className="font-medium text-sm">{product.name}</p>
          <p className="text-customRed font-semibold text-lg">
            {product.price}
          </p>
          <div className="flex items-center justify-around gap-3 border-2 border-customGray-300 py-1 px-2 mt-4 rounded-md">
            <HiMinusSmall className="inline-block text-xl" />
            <p>1</p>
            <HiPlusSmall className="inline-block text-xl" />
          </div>
        </div>
        <MdDelete className="inline-block text-2xl ml-auto" />
      </div>

      <OrderSummary />
    </section>
  );
};

export default Cart;
