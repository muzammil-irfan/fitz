import { list } from "postcss";
import React from "react";
//This is common component used for overweight and underweight section of bmi
export default function RiskAssociatedText({ title, description, points }) {
  return (
    <div>
      <p className="font-bold py-3">{title}</p>
      <p className="py-3">{description}</p>
      <ul className="list-disc ">
        {points.map((item) => {
          return <li className="py-2 ml-5" key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
