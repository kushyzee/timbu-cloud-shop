import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import formatNaira from "../formatNaira";

const CartItemDesktop = ({ cartFunc }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart, state } =
    cartFunc;
  const { cart } = state;

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
              className="size-5 cursor-pointer rounded border-customGray-600"
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
      <div>
        {cart.map((product) => (
          <div key={product.id} className="mb-5 hidden items-start justify-between gap-5 rounded-lg lg:flex">
            <div className="flex lg:w-64 xl:w-80 items-start gap-2">
              <div className="aspect-square h-28">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-sm font-medium">{product.name}</p>
            </div>
            <div className="flex flex-1 items-center justify-between xl:ml-8">
              <div className="border-customGray-300 flex items-center justify-around gap-3 rounded-md border-2 px-1 w-24 py-1">
                <button
                  disabled={product.quantity === 1}
                  className={`inline-block cursor-pointer ${product.quantity === 1 && "text-customGray-600 pointer-events-none"}`}
                  onClick={() => decreaseQuantity(product.id)}
                >
                  <HiMinusSmall className="text-xl" />
                </button>
                <p>{product.quantity}</p>
                <button
                  className={`inline-block cursor-pointer`}
                  onClick={() => increaseQuantity(product.id)}
                >
                  <HiPlusSmall className="text-xl" />
                </button>
              </div>
              <p className="xl:-ml-16 lg:-ml-6 text-lg font-semibold text-customRed">
                {formatNaira(product.price)}
              </p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="inline-block cursor-pointer"
              >
                {" "}
                <MdDelete className="text-2xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItemDesktop;
