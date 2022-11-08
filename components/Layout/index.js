import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ dir,categories, className,minHeight,children }) {
  
  return (
    <div dir={dir} className="h-screen flex flex-col justify-between">
      <div>
      <Header categories={categories} />
      <div className={` ${className ? className : ""}`}>{children}</div>
      </div>
      
      <Footer categories={categories} />
    </div>
  );
}
