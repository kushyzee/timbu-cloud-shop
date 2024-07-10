import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import products from "../assets/productList";

const CartItemDesktop = () => {
  const product = products[0];

  return (
    <div className="mb-2 hidden items-start justify-between gap-2 rounded-lg lg:flex">
      <div className="flex items-start gap-2">
        <div className="aspect-square h-28">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-sm font-medium">{product.name}</p>
      </div>
      <p className="text-lg font-semibold text-customRed">{product.price}</p>
      <div className="border-customGray-300 flex items-center justify-around gap-3 rounded-md border-2 px-2 py-1">
        <HiMinusSmall className="inline-block text-xl" />
        <p>1</p>
        <HiPlusSmall className="inline-block text-xl" />
      </div>
      <MdDelete className="inline-block text-2xl" />
    </div>
  );
};

export default CartItemDesktop;
