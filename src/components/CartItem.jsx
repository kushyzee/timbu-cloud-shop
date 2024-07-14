import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import products from "../assets/productList";
import { useContext } from "react";

const CartItem = ({ isCart = true, cartContext }) => {
  const { state, dispatch } = useContext(cartContext);
  const { cart } = state;

  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };
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
              <button disabled={product.quantity === 1} className={`inline-block cursor-pointer ${product.quantity === 1 && "text-customGray-600"}`} onClick={() => decreaseQuantity(product.id)}>
                <HiMinusSmall className=" text-xl cursor-pointer" />
              </button>
              <p>{product.quantity}</p>
              <button className={`inline-block cursor-pointer`} onClick={() => increaseQuantity(product.id)}>
              <HiPlusSmall className=" text-xl cursor-pointer" />
              </button>
            </div>
          )}
        </div>
        {isCart && <button onClick={() => removeFromCart(product.id)} className="ml-auto inline-block cursor-pointer"> <MdDelete className="text-2xl" /></button>}
      </div>
      )) }
      
    </div>
  );
};

export default CartItem;
