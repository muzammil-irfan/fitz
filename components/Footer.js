import Link from "next/link";
import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="yellow-background py-8 ">
      <div className="container mx-auto px-3">
        <img src="/logo-white.png"  />
        <div className="flex justify-between my-4 pb-5 flex-col md:flex-row gap-2 ">
          {/* First part of footer */}
          <div className="mb-5 md:mb-0">
            <p className="w-80 my-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <div className="flex gap-5 py-2">
              <BsFacebook size="24px" />
              <BsTwitter size="24px" />
              <BsInstagram size="24px" />
            </div>
          </div>
          {/* Second part of footer */}
          <div className="flex flex-col md:items-center gap-3">
            {linksData.slice(0,3).map((item) => {
              return <LinkDisplayer data={item} key={item.name} />
            })}
          </div>
          {/* Third part of footer */}
          <div className="flex flex-col md:items-center gap-3">
            {linksData.slice(3, 6).map((item) => {
              return <LinkDisplayer data={item} key={item.name} />
            })}
          </div>
          {/* Fourth part of footer */}
          <div className="flex flex-col md:items-center gap-3">
            {linksData.slice(6, 9).map((item) => {
              return <LinkDisplayer data={item} key={item.name} />
            })}
          </div>
          {/* Fourth part of footer */}
          <div className="flex md:flex-col md:items-center gap-3 mt-5">
            <Image src="/app-store-button.png" width="145px" height="50px" layout='fixed' />
            <Image src="/playstore-button.png" width="145px" height="50px" layout='fixed' />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center sm:flex-row gap-5 pt-8 border-t " >
            <p>© 2022 Fit Cornerz. Made with &lt;3 in Jordan</p>
            {
                linksData.slice(9,11).map(item=>{
                    return <LinkDisplayer data={item} key={item.name} />
                })
            }
        </div>
      </div>
    </footer>
  );
}
const LinkDisplayer = ({ data }) => {
  return (
    <Link href={data.href}>
      <a>
        <p>{data.name}</p>
      </a>
    </Link>
  );
};
const linksData = [
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "PTs",
    href: "/pts",
  },
  {
    name: "Courts",
    href: "/court",
  },
  {
    name: "Kids",
    href: "/kid",
  },
  {
    name: "Gyms",
    href: "/gym",
  },
  {
    name: "Nutritionist",
    href: "/nutritionist",
  },
  {
    name: "Supplements",
    href: "/supplements",
  },
  {
    name: "Physio Therapy",
    href: "/physio-therapy",
  },
  {
    name: "Healthy Food",
    href: "/healthy-food",
  },    
  {
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "Terms & Conditions",
    href: "/termsandconditions",
  },
];