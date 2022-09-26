import CustomButton from "./CustomButton";
import { BsArrowRightShort } from "react-icons/bs";

export default function SeeMoreButton() {
    return (
      <CustomButton arrow>
        <p className="w-16">See more </p>
        <BsArrowRightShort size="24px" />
      </CustomButton>
    );
  };