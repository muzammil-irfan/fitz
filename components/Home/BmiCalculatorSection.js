import React from "react";
import CustomButton from "../common/CustomButton";
import Heading from "../common/Heading";
import Text from "../common/Text";

export default function BmiCalculatorSection() {
  return (
    <div className="flex px-5 flex-col items-center gap-2 mt-5">
      <Heading className={"text-3xl sm:text-center"}>
        Body Mass Index <span className="yellow">(BMI)</span> Calculator
      </Heading>
      <Text className="sm:text-center">
        The value obtained from the calculation of BMI is used to categorize
        whether a person is underweight, normal weight, overweight, or obese
        depending on what range the value falls between.
      </Text>
      <CustomButton className={"m-2"}>BMI Calculator</CustomButton>
      <img src="/home/bmi-calculator.png" width="300px"/>
    </div>
  );
}
