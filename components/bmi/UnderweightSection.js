import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";
import RiskAssociatedText from "./RiskAssociatedText";

export default function UnderweightSection() {
  const intl = useIntl();
  const router = useRouter();
  return (
    <div>
      <RiskAssociatedText
        title={intl.formatMessage({ id: "page.bmi.underweight.title" })}
        description={intl.formatMessage({
          id: "page.bmi.underweight.description",
        })}
        points={points[router.locale]}
      />  
    </div>
  );
}

const points = {
  en:[
  "Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)",
  "Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone",
  "A decrease in immune function",
  "Growth and development issues, particularly in children and teenagers",
  "Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester",
  "Potential complications as a result of surgery",
],
  ar:[
  "سوء التغذية ونقص الفيتامينات وفقر الدم (انخفاض القدرة على حمل الأوعية الدموية)",
  "هشاشة العظام ، وهو مرض يسبب ضعف العظام ، مما يزيد من خطر كسرها",
  "انخفاض في وظيفة المناعة",
  "قضايا النمو والتطور ، خاصة عند الأطفال والمراهقين",
  "مشاكل الإنجاب المحتملة للنساء بسبب الاختلالات الهرمونية التي يمكن أن تعطل الدورة الشهرية. النساء ناقصات الوزن لديهن أيضًا فرصة أكبر للإجهاض في الأشهر الثلاثة الأولى",
  "المضاعفات المحتملة نتيجة الجراحة",
],
};
