import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import products from "../assets/productList";
import { useContext } from "react";

const CartItem = ({ isCart = true, cartContext }) => {
  const product = products[0];
  const { state, dispatch } = useContext(cartContext);
  const { cart } = state;
  console.log(cart[0]);
  return (
    <div>
      {cart.map(product => (
        <div id={product.id} key={product.id}
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
            <div className="border-customGray-300 mt-4 flex items-center justify-around gap-3 rounded-md border-2 px-2 py-1 w-28">
              <HiMinusSmall className="inline-block text-xl cursor-pointer" />
              <p>1</p>
              <HiPlusSmall className="inline-block text-xl cursor-pointer" />
            </div>
          )}
        </div>
        {isCart && <MdDelete className="ml-auto inline-block text-2xl cursor-pointer" />}
      </div>
      )) }
      
    </div>
  );
};

export default CartItem;
