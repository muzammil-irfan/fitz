import React from "react";
import CustomButton from "../common/CustomButton";
import Heading from "../common/Heading";
import Text from "../common/Text";
import { FormattedMessage, useIntl } from "react-intl";

export default function BmiCalculatorSection() {
  return (
    <div className="flex px-5 flex-col items-center gap-2 mt-5">
      <Heading className={"text-3xl sm:text-center my-4 lg:my-10"}>
        {/* Body Mass Index <span className="yellow">(BMI)</span> Calculator */}
        <FormattedMessage id="page.home.bmi.title" values={{ b: (chunks) => <b className="yellow">{chunks}</b> }} />
      </Heading>
      <Text className="sm:text-center">
        <FormattedMessage id="page.home.bmi.description"  />
      </Text>
      <CustomButton className={"m-2"}>
        <FormattedMessage id="page.home.bmi.button"  />
      </CustomButton>
      <img src="/home/bmi-calculator.png" width="300px"/>
    </div>
  );
}
