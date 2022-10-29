import React from "react";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ data,children }) {
  console.log(data)
  return (
    <>
      <div className="">
        <Header data={data} />
        <div className="container mx-auto md:px-1">{children}</div>
        <Footer data={data} />
      </div>
    </>
  );
}
