import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import products from "../assets/productList";

const CartItemDesktop = () => {
  const product = products[0];

  return (
    <>
      <div className="border-customGray-200 mb-4 hidden items-center justify-between border-b pb-4 text-customGray-600 lg:flex">
        <div>
          <label
            htmlFor="products"
            className="flex cursor-pointer items-center gap-2"
          >
            <input
              type="checkbox"
              class="size-5 cursor-pointer rounded border-customGray-600"
              id="products"
              name="products"
            />
            PRODUCTS
          </label>
        </div>
        <p className="ml-28">Quantity</p>
        <p>PRICE</p>
        <p>REMOVE</p>
      </div>
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
        <div className="border-customGray-300 flex items-center justify-around gap-3 rounded-md border-2 px-2 py-1">
          <HiMinusSmall className="inline-block text-xl" />
          <p>1</p>
          <HiPlusSmall className="inline-block text-xl" />
        </div>
        <p className="text-lg font-semibold text-customRed">{product.price}</p>
        <MdDelete className="inline-block text-2xl" />
      </div>
    </>
  );
};

export default CartItemDesktop;
