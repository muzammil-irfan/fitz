import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ categories, children }) {
  
  return (
    <>
      <Header categories={categories} />
      <div className="container mx-auto md:px-1">{children}</div>
      <Footer categories={categories} />
    </>
  );
}
