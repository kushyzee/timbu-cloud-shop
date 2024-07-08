import products from "../assets/productList";

const Products = () => {
  return (
    <section className="text-base">
      <h2 className="font-semibold">Product list</h2>
      <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {products.map((product) => (
          <div key={product.id} className="border-2 border-customGray-300 rounded-[10px] min-w-36">
            <div className="aspect-square min-h-32">
              <img src={product.image} alt={product.name} className="object-cover w-full h-full rounded-ss-[10px] rounded-se-[10px]"/>
            </div>
            <div className="px-2 py-3">
              <p className="text-sm leading-tight font-semibold">{product.name}</p>
              <p className="text-lg font-medium text-customRed">{product.price}</p>
              <p>{product.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
