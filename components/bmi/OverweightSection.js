import React from "react";
import RiskAssociatedText from "./RiskAssociatedText";

export default function OverweightSection() {
  return (
    <div>
      <RiskAssociatedText
        title="Risks associated with being overweight"
        description="Being overweight increases the risk of a number of serious diseases and health conditions. Below is a list of said risks, according to the Centers for Disease Control and Prevention (CDC):"
        points={points}
      />
    </div>
  );
}
const points = [
  "High blood pressure",
  "Higher levels of LDL cholesterol, which is widely considered 'bad cholesterol', lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides",
  "Type II diabetes",
  "Stroke",
  "Gallbladder disease",
  "Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage",
  "Sleep apnea and breathing problems",
  "Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)",
  "Low quality of life",
  "Mental illnesses such as clinical depression, anxiety, and others",
  "Body pains and difficulty with certain physical functions",
];
