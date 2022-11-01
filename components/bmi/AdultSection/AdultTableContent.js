import React from "react";
import Content from "../Content";

export default function AdultTableContent() {
  return (
    <div>
      <Content
        title={`BMI table for adults`}
        description={`This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 18 or older.`}
      />
    </div>
  );
}
