import React from "react";
import Heading from "../common/Heading";
import Text from "../common/Text";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";

export default function BmiCalculatorSection() {
  const router = useRouter();
  return (
    <div className="flex px-5 flex-col items-center gap-2 mt-5">
      <Heading className={"text-3xl sm:text-center xl:text-[56px] my-4 lg:my-10"}>
        <FormattedMessage id="page.home.bmi.title" values={{ b: (chunks) => <b className="yellow">{chunks}</b> }} />
      </Heading>
      <p className="text-xs sm:text-center md:text-xl " style={{color:"rgba(91, 93, 97, 1)"}} >
        <FormattedMessage id="page.home.bmi.description"  />
      </p>
      <div className="px-1 py-4 w-full text-center mb-3 md:mb-10">
      <button className={" bg-brand text-white py-3 w-full md:w-[350px] hover:bg-[#FED382]"} onClick={()=>{router.push("/bmi")}}>
        <FormattedMessage id="page.home.bmi.button"  />
      </button>
      </div>
      <img src="/home/bmi-calculator.png" className="max-w-[300px] md:max-w-[500px]"/>
    </div>
  );
}
