import footerImg from "../assets/images/footer-img.png";

const FooterDesktop = () => {
  return (
    <div className="mx-auto mb-20 hidden max-w-screen-xl items-start justify-between pt-10 md:flex lg:px-8 lg:text-base">
      <div>
        <h3 className="font-bold lg:mb-2 lg:text-xl">Address</h3>
        <p>16, Clementine Street</p>
        <p>NW Bariga,</p>
        <p>Lagos, Nigeria</p>
      </div>
      <div className="flex max-w-96 flex-col items-center justify-center lg:max-w-xl">
        <div className="aspect-square w-32 lg:w-48">
          <img
            src={footerImg}
            alt="footer image"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="mt-3 text-center">
          <h3 className="mb-1 text-2xl font-bold lg:mb-3">TimbuCloudShop</h3>
          <p className="lg:text-xl">
            Explore our curated collection of premium kitchen utensils,
            cookware, kitchen towels and gadgets. From precision knives to
            stylish coffee makers, we’ve got everything you need to elevate your
            cooking experience.
          </p>
        </div>
      </div>
      <div>
        <h3 className="font-bold lg:mb-2 lg:text-xl">Contact</h3>
        <p>support@timbucloudshop.com</p>
        <p>help@timbucloudshop.com</p>
        <p className="font-bold">01-234567, 01-99952</p>
      </div>
    </div>
  );
};

export default FooterDesktop;
