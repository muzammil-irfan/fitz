import React from "react";
import Heading from "../components/common/Heading";
import BMIForm from "../components/bmi/Form";
import DesktopSection from "../components/bmi/DesktopSection";
import MobileSection from "../components/bmi/MobileSection";
import UnderweightSection from "../components/bmi/UnderweightSection";
import Content from "../components/bmi/Content";

export default function BMIPage() {
  return (
    <div className="py-5">
      <Heading>
        Body Mass Index <span className="yellow">(BMI)</span> Calculator
      </Heading>
      <p className="my-5">Please fill this information to calculate your BMI</p>
      <BMIForm />
      <Content
        title="BMI introduction"
        description={`BMI is a measurement of a person&apos;s leanness or corpulence based
        on their height and weight, and is intended to quantify tissue mass.
        It is widely used as a general indicator of whether a person has a
        healthy body weight for their height. Specifically, the value obtained
        from the calculation of BMI is used to categorize whether a person is
        underweight, normal weight, overweight, or obese depending on what
        range the value falls between. These ranges of BMI vary based on
        factors such as region and age, and are sometimes further divided into
        subcategories such as severely underweight or very severely obese.
        Being overweight or underweight can have significant health effects,
        so while BMI is an imperfect measure of healthy body weight, it is a
        useful indicator of whether any additional testing or action is
        required. Refer to the table below to see the different categories
        based on BMI that are used by the calculator.`}
      />
      <DesktopSection /> 
      <MobileSection />
      <UnderweightSection />
    </div>
  );
}
