import products from "../assets/productList";
import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import OrderSummary from "../components/OrderSummary";
import PageLabel from "../components/PageLabel";

const Cart = () => {
  const product = products[0];
  return (
    <section className="text-base text-customGray-800 lg:mb-32">

      <div className="md:flex items-start justify-between gap-5 lg:gap-10">
      <div className="md:flex-1">
        <div className="mb-5 flex items-center justify-between">
          <PageLabel name="Cart" page="/" />
          <p className="text-sm font-medium">1 item</p>
        </div>
          <div className="font-sm border-customGray-300 mb-2 flex items-center justify-start gap-2 rounded-[10px] border-2 p-2.5">
            <div className="aspect-square h-28">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="">
              <p className="text-sm font-medium">{product.name}</p>
              <p className="text-lg font-semibold text-customRed">
                {product.price}
              </p>
              <div className="border-customGray-300 mt-4 flex items-center justify-around gap-3 rounded-md border-2 px-2 py-1">
                <HiMinusSmall className="inline-block text-xl" />
                <p>1</p>
                <HiPlusSmall className="inline-block text-xl" />
              </div>
            </div>
            <MdDelete className="ml-auto inline-block text-2xl" />
          </div>
      </div>
        <OrderSummary />
      </div>
    </section>
  );
};

export default Cart;
