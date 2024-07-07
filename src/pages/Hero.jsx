import { RiArrowRightLine } from "react-icons/ri";
import { IKImage } from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/kushyzee/timbucloudshop";
const Hero = () => {
  return (
    <section>
      <div className="aspect-square min-h-[300px] w-auto max-w-[615px]">
        <IKImage className="object-cover object-center w-full h-full" urlEndpoint={urlEndpoint} path="hero_image_FW_ANX9Av.png" />
      </div>
      <div className="lg:text-xl mt-10">
        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-semibold mb-2">
          Crafted for perfection
        </h1>
        <p>
          From precision knives to stylish coffee makers, we’ve got everything
          you need to elevate your cooking experience.
        </p>
        <a
          href="#"
          className="bg-customGray-800 inline-block text-customGray-50 px-7 py-2 rounded-md font-medium mt-2.5 hover:bg-customGray-700 transition-colors duration-300"
        >
          Shop now <RiArrowRightLine className="ml-2.5 inline-block text-xl" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
