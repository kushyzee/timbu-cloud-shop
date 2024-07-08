import products from "../assets/productList";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className="text-base">
      <h2 className="font-semibold">Product list <span className="font-normal">({products.length})</span> </h2>
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {products.map((product) => (
          <div key={product.id} className="border-2 border-customGray-300 rounded-[10px] min-w-36">
            <div className="aspect-square min-h-32">
              <img src={product.image} alt={product.name} className="object-cover w-full h-full rounded-ss-[10px] rounded-se-[10px]"/>
            </div>
            <div className="px-2 py-2.5 text-sm">
              <p className="leading-tight font-medium">{product.name}</p>
              <p className="text-lg font-semibold mb-1 text-customRed">N{product.price}</p>
              <p className="font-semibold"><MdStar className="text-customYellow inline-block" /> {product.rating}</p>
              <Link to="cart" className="block bg-customGray-800 text-customGray-50 text-center py-2.5 rounded-md mt-2.5">Add to cart</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
