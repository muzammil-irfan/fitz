import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ dir,categories, className,children }) {
  
  return (
    <div dir={dir}>
      <Header categories={categories} />
      <div className={`mt-3 min-h-screen ${className ? className : ""}`}>{children}</div>
      <Footer categories={categories} />
    </div>
  );
}
