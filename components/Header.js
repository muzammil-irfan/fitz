import Link from "next/link";
import React from "react";
import {TbMenu} from 'react-icons/tb';

export default function Header() {
  return (
    <div className="py-5 shadow-sm">
        <div className="flex md:hidden justify-between px-5 items-center container mx-auto">
            <img src="/logo-small.png" />
            <TbMenu />
        </div>
        {/* Desktop header */}
      <div className="hidden md:flex justify-between  container mx-auto ">
        <img src="/logo.png" className="" />
        <div className="flex items-center gap-4 ">
          {headerLinks.map((item) => {
            return <HeaderLink key={item.name} data={item} />;
          })}
        </div> 
        <div className="flex items-center justify-center">
          <p className="pr-1">English | </p>
          <p className="yellow"> عربی</p>
        </div>
      </div>
    </div>
  );
}

const HeaderLink = ({ data }) => {
  return (
    <Link href={data.href}>
      <a>
        <p className="">{data.name}</p>
      </a>
    </Link>
  );
};

const headerLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blogs",
    href: "/blog",
  },
  {
    name: "BMI",
    href: "/bmi",
  },
  {
    name: "Contact us",
    href: "/contact",
  },
];
