import React from "react";
import Image from "next/image";

export default function BlogCard({ imageSrc, category, title, description }) {
  return (
    <div className="m-2 md:m-4 shadow-md h-[450px] ">
      <div className="relative ">
        <Image
          src={imageSrc}
          layout="responsive"
          width="400px"
          height="200px"
        />
      </div>
      <div className="text-left p-3">
        <p className="yellow my-2">{category.toUpperCase()}</p>
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="py-5 text-slate-500 text-sx md:text-md">{description}</p>
      </div>
    </div>
  );
}
