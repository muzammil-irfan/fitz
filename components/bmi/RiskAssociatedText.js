import React from "react";
//This is common component used for overweight and underweight section of bmi
export default function RiskAssociatedText({ title, description, points }) {
  return (
    <div className="py-5 md:w-1/2">
      <h3 className="font-bold text-xl md:py-5 ">{title}</h3>
      <p className="py-5 md:text-lg">{description}</p>
      <ul className="list-disc ">
        {points.map((item) => {
          return <li className="py-2 ml-5 md:text-lg" key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
