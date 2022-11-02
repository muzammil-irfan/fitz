import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";
import RiskAssociatedText from "./RiskAssociatedText";

export default function OverweightSection() {
  const intl = useIntl();
  const router = useRouter();
  return (
    <div>
      <RiskAssociatedText
        title={intl.formatMessage({ id: "page.bmi.overweight.title" })}
        description={intl.formatMessage({
          id: "page.bmi.overweight.description",
        })}
        points={points[router.locale]}
      />
    </div>
  );
}
const points = {
  en: [
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
  ],
  ar: [
    "ضغط دم مرتفع",
  `ارتفاع مستويات كوليسترول البروتين الدهني منخفض الكثافة ، والذي يُعتبر على نطاق واسع "كوليسترول ضار" ، وانخفاض مستويات كوليسترول البروتين الدهني عالي الكثافة ، الذي يُعتبر كوليسترولًا جيدًا باعتدال ، ومستويات عالية من الدهون الثلاثية`,
    "مرض السكري من النوع الثاني",
    "السكتة الدماغية",
    "أمراض المرارة",
    "هشاشة العظام ، وهو نوع من أمراض المفاصل ينتج عن انهيار غضروف المفصل",
    "توقف التنفس أثناء النوم ومشاكل التنفس",
    "بعض أنواع السرطان (بطانة الرحم والثدي والقولون والكلى والمرارة والكبد)",
    "تدني جودة الحياة",
    "الأمراض العقلية مثل الاكتئاب والقلق وغيرها",
    "آلام الجسم وصعوبة في بعض الوظائف الجسدية",
  ],
};
