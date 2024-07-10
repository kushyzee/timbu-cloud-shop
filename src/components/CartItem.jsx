import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import products from "../assets/productList";

const CartItem = ({ isCart = true }) => {
  const product = products[0];

  return (
    <div
      className={`font-sm ${isCart && "lg:hidden lg:border-0 lg:p-0"} border-customGray-300 mb-2 flex items-center justify-start gap-2 rounded-lg border-2 p-2.5`}
    >
      <div className="aspect-square h-28">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <p className="text-sm font-medium">{product.name}</p>
        <p className="text-lg font-semibold text-customRed">{product.price}</p>
        {isCart && (
          <div className="border-customGray-300 mt-4 flex items-center justify-around gap-3 rounded-md border-2 px-2 py-1">
            <HiMinusSmall className="inline-block text-xl" />
            <p>1</p>
            <HiPlusSmall className="inline-block text-xl" />
          </div>
        )}
      </div>
      {isCart && <MdDelete className="ml-auto inline-block text-2xl" />}
    </div>
  );
};

export default CartItem;
