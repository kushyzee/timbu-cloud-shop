import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartProvider";
import ReactPaginate from "react-paginate";
import getProducts from "../apiService";
import { BounceLoader } from "react-spinners";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import ProductGrid from "./ProductGrid";

// PRODUCT LIST COMPONENT
const Products = () => {
  const { state, dispatch } = useContext(CartContext);
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

  // PAGINATION FUNCTIONALITY
  const handlePageClick = (event) => {
    window.scrollTo(0, 0);
    const newOffset = (event.selected * productsPerPage) % products.length;
    setProductOffset(newOffset);
    setPage(event.selected + 1);
    setProductOffset(newOffset);
  };

  // LOADING STATE
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

  // ERROR STATE
  if (error) {
    console.log(error);
    return (
      <div className="h-svh pt-10 text-center">
        <h1 className="text-4xl font-semibold">An error occurred</h1>
        <p className="text-lg">Please try again later</p>
      </div>
    );
  }

  // ADD TO CART FUNCTIONALITY
  const addToCart = (product) => {
    const addedItem = {
      id: product.id,
      name: product.name,
      image: `https://api.timbu.cloud/images/${product.photos[0].url}`,
      price: product.current_price[0].NGN[0],
      quantity: 1,
    };
    dispatch({
      type: "ADD_TO_CART",
      payload: addedItem,
    });
  };

  return (
    <section className="mx-auto text-base lg:text-xl">
      <h2 className="font-semibold lg:text-2xl">
        Product list <span className="font-normal">({products.length})</span>
      </h2>

{/* PRODUCT GRID COMPONENT */}
      <ProductGrid
        products={currentProducts}
        addToCart={addToCart}
      />

      {/* PAGINATION COMPONENT */}
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
