import React from "react";
import RiskAssociatedText from "./RiskAssociatedText";

export default function UnderweightSection() {
  return (
    <div>
      <RiskAssociatedText
        title="Risks associated with being underweight"
        description="In some cases, being underweight can be a sign of some underlying condition or disease such as anorexia nervosa, which has its own risks. Consult your doctor if you think you or someone you know is underweight, particularly if the reason for being underweight does not seem obvious."
        points={points}
      />
    </div>
  );
}

const points = [
  "Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)",
  "Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone",
  "A decrease in immune function",
  "Growth and development issues, particularly in children and teenagers",
  "Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester",
  "Potential complications as a result of surgery",
];
