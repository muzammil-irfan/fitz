import React from "react";
import CustomButton from "../common/CustomButton";
import Heading from "../common/Heading";

export default function BmiCalculatorSection() {
  return (
    <div className="flex flex-col items-center gap-2 my-5">
      <Heading>
        Body Mass Index <span className="yellow">(BMI)</span> Calculator
      </Heading>
      <p className="text-center">
        The value obtained from the calculation of BMI is used to categorize
        whether a person is underweight, normal weight, overweight, or obese
        depending on what range the value falls between.
      </p>
      <CustomButton>BMI Calculator</CustomButton>
      <img src="/home/bmi-calculator.png" width="300px"/>
    </div>
  );
}
