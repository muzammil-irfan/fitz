import CustomButton from "./CustomButton";
import { BsArrowRightShort } from "react-icons/bs";
import { FormattedMessage } from "react-intl";

export default function SeeMoreButton() {
    return (
      <button className="flex items-center text-xs text-brand sm:bg-brand sm:text-white sm:px-8 py-2 ">
        <p className="w-16"><FormattedMessage id="page.home.seemore.button" /> </p>
        <BsArrowRightShort size="24px" />
      </button>
    );
  };