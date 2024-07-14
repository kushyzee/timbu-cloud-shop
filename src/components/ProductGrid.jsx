import { MdStar } from "react-icons/md";
import formatNaira from "../formatNaira";


const ProductGrid = ({ products, addToCart }) => {
  return (
    <div className="mx-auto mt-3 grid min-w-80 grid-cols-2 items-center justify-center gap-2 md:grid-cols-4 lg:mt-11 lg:grid-cols-4 lg:gap-4">
      {products.map((product) => (
        <div
          id={product.id}
          key={product.id}
          className="border-customGray-300 w-full min-w-40 rounded-[10px] border-2"
        >
          <div className="aspect-square min-h-32">
            <img
              src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
              alt={product.name}
              className="h-full w-full rounded-se-[10px] rounded-ss-[10px] object-cover"
            />
          </div>
          <div className="px-2 py-2.5 text-sm lg:px-3 lg:text-base">
            <p className="font-medium leading-tight">{product.name}</p>
            <p className="mb-1 text-lg font-semibold text-customRed lg:text-2xl">
              {formatNaira( product.current_price[0].NGN[0])}
            </p>
            <p className="font-semibold">
              <MdStar className="inline-block text-customYellow" />
              4.2
            </p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2.5 block w-full rounded-md bg-customGray-800 py-2.5 text-center text-customGray-50 lg:text-xl"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
