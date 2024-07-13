import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import getProducts from "../apiService";
import { BounceLoader } from "react-spinners";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [productOffset, setProductOffset] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const productsPerPage = 12;
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const endOffset = productOffset + productsPerPage;
  const currentProducts = products.slice(productOffset, endOffset);

  const handlePageClick = (event) => {
    window.scrollTo(0, 0);
    const newOffset = (event.selected * productsPerPage) % products.length;
    setProductOffset(newOffset);
    setPage(event.selected + 1);
    setProductOffset(newOffset);
  };

  if (loading) {
    return (
      <div className="flex h-[90svh] items-center justify-center">
        <BounceLoader
          speedMultiplier={2}
          color="#0abab5"
          loading={loading}
          size={120}
        />
      </div>
    );
  }

  if (error) {
    console.log(error);
    return (
      <div className="h-svh pt-10 text-center">
        <h1 className="text-4xl font-semibold">An error occurred</h1>
        <p className="text-lg">Please try again later</p>
      </div>
    );
  }

  return (
    <section className="mx-auto text-base lg:text-xl">
      <h2 className="font-semibold lg:text-2xl">
        Product list <span className="font-normal">({products.length})</span>
      </h2>
      <div className="mx-auto mt-3 grid min-w-80 grid-cols-2 items-center justify-center gap-2 md:grid-cols-4 lg:mt-11 lg:grid-cols-4 lg:gap-4">
        {currentProducts.map((product) => (
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
      <div className="bg-cus mt-10 text-center">
        <ReactPaginate
          containerClassName={"flex items-center justify-center gap-3"}
          activePage={page}
          breakLabel="..."
          nextLabel={
            <div>
              <MdNavigateNext className="size-6" />
              <span className="sr-only">Previous</span>
            </div>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel={
            <div>
              <MdNavigateBefore className="size-6" />
              <span className="sr-only">Previous</span>
            </div>
          }
          renderOnZeroPageCount={null}
          pageLinkClassName="px-2.5 py-1 rounded-md"
          activeLinkClassName={"bg-customGray-800 text-white rounded-md"}
          disabledClassName="text-customGray-600 pointer-events-none"
        />
      </div>
    </section>
  );
};

export default Products;
