import { MdNavigateBefore } from "react-icons/md";
import { Link } from "react-router-dom";

const PageLabel = ({name, page}) => {
  return (
    <div className="flex items-center gap-3 -ml-2">
      <Link to={page}>
        <MdNavigateBefore className="inline-block text-2xl lg:text-4xl cursor-pointer" />
      </Link>
      <h1 className="font-semibold text-base lg:text-3xl">{name}</h1>
    </div>
  );
};

export default PageLabel;
