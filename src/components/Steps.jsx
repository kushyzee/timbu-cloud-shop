import { MdCheckCircle } from "react-icons/md";
import { MdOutlineRadioButtonChecked as CheckIcon } from "react-icons/md";

const Steps = ({ path }) => {
  return (
    <div className="w-full px-2.5 lg:max-w-screen-sm lg:px-0 lg:mx-auto">
      <h2 className="sr-only">Steps</h2>
      <div>
        <ol className="flex items-center justify-between text-[10px] lg:text-sm">
          <li className="flex flex-col items-center lg:gap-1">
            <MdCheckCircle className="text-2xl lg:text-3xl text-customTeal" />
            <span className="text-customGray-50"> Order Summary </span>
          </li>

          <li className="flex flex-col items-center lg:gap-1">
            {path === "/success" ? (
              <MdCheckCircle className="text-2xl lg:text-3xl text-customTeal" />
            ) : (
              <CheckIcon className="text-2xl lg:text-3xl text-customGray-50" />
            )}

            <span className="text-customGray-50"> Payment </span>
          </li>

          <li className="flex flex-col items-center lg:gap-1">
          {path === "/success" ? (
              <MdCheckCircle className="text-2xl lg:text-3xl text-customTeal" />
            ) : (
              <CheckIcon className="text-2xl lg:text-3xl text-customGray-600" />
            )}
            <span className="text-customGray-50"> Confirmation </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Steps;
