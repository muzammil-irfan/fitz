import { useRouter } from "next/router";
import React from "react";
import { FormattedMessage } from "react-intl";

export default function ChildrenTable() {
    const router = useRouter();
  return (
    <div className="py-10">
      <table>
        <tr className="text-center bg-gray-200">
          <th className="py-2 w-48">
            <FormattedMessage id="page.bmi.children.table.title.category" />
          </th>
          <th className="py-2 w-48">
            <FormattedMessage id="page.bmi.children.table.title.range" />
          </th>
        </tr>
        {categoryList[router.locale].map((item, index) => {
          return (
            <tr key={item} className="">
              <td className="text-center py-2 border">{item}</td>
              <td className="text-center py-2 border">{rangeList[index]}</td>
            </tr>
          );
        })}
      </table>
      <p className="text-xs py-1">
        <FormattedMessage id="page.bmi.children.title" />
      </p>
    </div>
  );
}
const categoryList = {
  en: ["Underweight", "Healthy weight", "At risk of overweight", "Overweight"],
  ar: ["نقص الوزن", "وزن صحي", "معرضة لخطر زيادة الوزن", "زيادة الوزن"],
};
const rangeList = ["< 5%", "5% - 8%", "85% - 95%", "> 95%"];
