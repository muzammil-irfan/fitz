import Link from "next/link";
import { useRouter } from "next/router";
import React,{useContext, useState} from "react";
import { TbMenu } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";
import { CategoriesContext } from "./context/categories";
import titleToSlugConverter from "../utils/titleToSlugConverter";

export default function Header({data}) {
  const {categories} = useContext(CategoriesContext)
  const [sidebar,setSidebar] = useState(false);
  return (
    <div className="py-5 shadow-sm">
      <div className="flex md:hidden justify-between px-5 items-center container mx-auto">
        <img src="/logo-small.png" />
        <TbMenu onClick={()=>{setSidebar(true)}} />
      </div>
      <div className={`${sidebar ? "w-full p-5" : "w-0 invisible "} md:hidden bg-white h-screen fixed top-0 z-50  overflow-scroll`}>
        <div className="flex justify-end">
          <MdOutlineClose size="24px" onClick={()=>{setSidebar(false)}} />
        </div>
        <h3 className="font-bold">More</h3>
        <div className="flex items-center my-4 font-medium">
          <p className="pr-1">English | </p>
          <p className="yellow"> عربی</p>
        </div>
        {
          sidebarLinks1.map(item=>{
            return (
              <Link href={item.href} key={item.name} >
                <a>
                  <p className="my-4 font-light"onClick={()=>{setSidebar(false)}}>
                    {item.name}
                  </p>
                </a>
              </Link>
            )
          })
        }
        <h3 className="font-bold"> 
        What are you looking for?
        </h3>
        {
          categories.map(item=>{
            return(
              <Link href={titleToSlugConverter(item.title)} key={item.id} >
                <a>
                  <p className="my-3"onClick={()=>{setSidebar(false)}}>{item.title}</p>
                </a>
              </Link>
            )
          })
        }
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
  const router = useRouter();
  const pN = router.asPath;
  return (
    <Link href={data.href}>
      <a>
        <p className={`${pN === data.href && "font-bold"}`}>{data.name}</p>
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
const sidebarLinks1 = [
  {
    name:"Download the app",
    href:"/"
  },
  {
    name:"Blogs",
    href:"/blog"
  },
  {
    name:"Terms & Conditions",
    href:"/termsandconditions"
  },
  {
    name:"Contact Us",
    href:"/contact"
  },
];
