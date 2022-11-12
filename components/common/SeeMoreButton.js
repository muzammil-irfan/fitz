
import { BsArrowRightShort } from "react-icons/bs";
import { FormattedMessage } from "react-intl";

export default function SeeMoreButton() {
    return (
      <button className="flex items-center text-xs text-brand sm:bg-brand sm:text-white w-[150px] sm:justify-center hover:sm:pl-2  py-2 hover:bg-[#FED382] hover:sm:pl-4 ">
        <p className="w-16 "><FormattedMessage id="page.home.seemore.button" /> </p>
        <BsArrowRightShort size="24px" />
      </button>
    );
  };