import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../apiService";
import Loader from "../utilities/Loader";
import ShowError from "../utilities/ShowError";
import PageLabel from "../components/PageLabel";
import { MdStar } from "react-icons/md";
import formatNaira from "../formatNaira";
import { CartContext } from "../context/CartProvider";
import toastify from "../utilities/toastify";


const ProductPage = () => {
  const { dispatch } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // LOADING STATE
  if (loading) {
    return <Loader loading={loading} />;
  }

  // ERROR STATE
  if (error) {
    console.log(error);
    return <ShowError />;
  }

   // ADD TO CART FUNCTIONALITY
   const addToCart = (product) => {
    const addedItem = {
      id: product.id,
      name: product.name,
      image: `https://api.timbu.cloud/images/${product.photos[0].url}`,
      price: product.current_price,
      quantity: 1,
    };
    dispatch({
      type: "ADD_TO_CART",
      payload: addedItem,
    });
    toastify(`${product.name} added to cart`)
  };


  return (
    <section className="text-base text-customGray-800 lg:mb-32">
      <div className="mb-5 lg:mb-20 flex items-start justify-between mx-auto">
        <PageLabel name="Product" page="/" />
      </div>
      <div className="md:flex items-start gap-5 lg:gap-10 lg:max-w-screen-lg mx-auto">
        {/* IMAGE GRID COMPONENT */}
        <div className="lg:flex items-start flex-row-reverse justify-between md:max-w-md lg:max-w-lg gap-5">
          <div className="min-h-32 h-60 md:max-w-xs lg:h-[304px]">
            <img
              src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
              alt={product.name}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          {/* smaller images */}
          <div className="mt-3 lg:mt-0 grid grid-cols-3 lg:grid-cols-1 gap-2 place-items-center md:max-w-xs lg:max-w-lg">
            <div className="aspect-square min-h-9 lg:h-24">
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                alt={product.name}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="aspect-square min-h-20 lg:h-24">
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                alt={product.name}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="aspect-square min-h-20 lg:h-24">
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                alt={product.name}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* PRODUCT DETAILS COMPONENT */}
        <div className="mt-5 md:mt-0 flex-1">
          <h2 className="text-2xl font-bold lg:text-3xl">{product.name}</h2>
          {product.extra_infos[0] && <p className="flex items-center gap-1 lg:text-lg"><MdStar className="text-yellow-400" /> {product.extra_infos[0].value}</p>}
          <p className="mt-1 lg:mt-3 lg:mb-5 mb-4 text-lg lg:text-xl font-semibold text-customRed">{formatNaira(product.current_price)}</p>
          <p>
            {product.description}
          </p>
          <button onClick={() => addToCart(product)} className="bg-customGray-800 hover:bg-customGray-700 w-full text-white font-semibold py-2.5 rounded-md mt-5 lg:mt-8">Add to cart</button>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
