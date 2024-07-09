import { MdNavigateBefore } from "react-icons/md";
import { Link } from "react-router-dom";

const PageLabel = ({name, page}) => {
  return (
    <div className="flex items-center gap-3 -ml-2">
      <Link to={page}>
        <MdNavigateBefore className="inline-block text-2xl" />
      </Link>
      <h1 className="font-semibold text-base">{name}</h1>
    </div>
  );
};

export default PageLabel;