import React from "react";
import Content from "../Content";

export default function ChildrenTableContent() {
  return (
    <div>
      <Content
        title={`BMI table for children and teens, age 2-20`}
        description={`The Centers for Disease Control and Prevention (CDC) recommends BMI categorization for children and teens between age 2 and 20.`}
      />
    </div>
  );
}
