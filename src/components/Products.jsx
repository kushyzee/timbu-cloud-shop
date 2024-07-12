import { useEffect, useState } from "react";
// import products from "../assets/productList";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import getProducts from "../apiService";
import { BounceLoader } from "react-spinners";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.items);
        setTotalPages(Math.ceil(data.total / data.size));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <BounceLoader color="#0abab5" loading={loading} size={150} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="mx-auto text-base lg:text-xl">
      <h2 className="font-semibold lg:text-2xl">
        Product list <span className="font-normal">({products.length})</span>
      </h2>
      <div className="mx-auto mt-3 grid min-w-80 grid-cols-2 items-center justify-center gap-2 md:grid-cols-4 lg:mt-11 lg:grid-cols-4 lg:gap-4">
        {products.map((product) => (
          <div
            id={product.unique_id}
            key={product.id}
            className="border-customGray-300 w-full min-w-40 rounded-[10px] border-2"
          >
            <div className="aspect-square min-h-32">
              <img
                src={product.photos[0].url}
                alt={product.name}
                className="h-full w-full rounded-se-[10px] rounded-ss-[10px] object-cover"
              />
            </div>
            <div className="lg:text-b ase px-2 py-2.5 text-sm lg:px-3">
              <p className="font-medium leading-tight">{product.name}</p>
              <p className="mb-1 text-lg font-semibold text-customRed lg:text-2xl">
                N{product.current_price[0].NGN[0]}
              </p>
              <p className="font-semibold">
                <MdStar className="inline-block text-customYellow" />
                {product.rating}
              </p>
              <Link
                to="cart"
                className="mt-2.5 block rounded-md bg-customGray-800 py-2.5 text-center text-customGray-50 lg:text-xl"
              >
                Add to cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
