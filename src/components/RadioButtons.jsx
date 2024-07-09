import { useState, Fragment } from "react";
import { RadioGroup } from "@headlessui/react";
import { MdOutlineRadioButtonChecked as CheckIcon } from "react-icons/md";
import { RiVisaLine, RiMastercardFill } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";

const cards = [
  <RiVisaLine />,
  <RiMastercardFill />,
  <FaCcPaypal />,
];

function RadioButtons() {
  const [card, setCard] = useState(cards[0]);

  return (
    <RadioGroup value={card} onChange={setCard}>
      <RadioGroup.Label className="mb-2">
        Choose your preferred payment method
      </RadioGroup.Label>
      <div className="flex gap-5">
        {cards.map((card) => (
          <RadioGroup.Option key={card} value={card} as={Fragment}>
            {({ active, checked }) => (
              <p
                className={`${
                  active && "bg-customGray-400"
                } flex items-center gap-1 rounded-md cursor-pointer`}
              >
                <CheckIcon
                  className={`inline-block text-2xl ${checked ? "text-customTeal" : "text-customGray-600"}`}
                />
                <span
                  className={`text-3xl inline-block px-2 ${checked && "border-2 border-customTeal rounded-md"}`}
                >
                  {card}
                </span>
              </p>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
export default RadioButtons;
