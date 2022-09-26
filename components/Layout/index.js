import React from "react";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="">
        <Header />
        <div className="container mx-auto md:px-1">{children}</div>
        <Footer />
      </div>
    </>
  );
}
