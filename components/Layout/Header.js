import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { TbMenu } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";
import titleToSlugConverter from "../../utils/titleToSlugConverter";
import { FormattedMessage, useIntl } from "react-intl";

export default function Header({ categories }) {
  const router = useRouter();
  const [sidebar, setSidebar] = useState(false);
  const intl = useIntl();
  return (
    <div className="py-5 md:py-9 shadow-md sticky top-0 bg-white px-2 md:px-4 z-[99] ">
      <div className="flex md:hidden justify-between px-5 items-center mx-auto ">
        <Link href="/">
          <a>
            <img src="/logo-small.png" />
          </a>
        </Link>
        <TbMenu
          onClick={() => {
            setSidebar(true);
          }}
        />
      </div>
      <div
        className={`${
          sidebar ? "w-full p-5" : "w-0 invisible "
        } md:hidden bg-white h-screen fixed top-0 z-50  overflow-scroll`}
      >
        <div className="flex justify-end">
          <MdOutlineClose
            size="24px"
            onClick={() => {
              setSidebar(false);
            }}
          />
        </div>
        <h3 className="font-bold">
          <FormattedMessage id="page.header.more" />
        </h3>
        <div className="flex items-center my-4 font-medium">
          <Link href={"/"} locale="en">
            <a>
              <p className={`pr-1 ${router.locale === "en" && "yellow"}`}>
                English
              </p>
            </a>
          </Link>
          <p>|</p>
          <Link href={"/"} locale="ar">
            <a>
              <p className={`pr-1 ${router.locale === "ar" && "yellow"}`}>
                {" "}
                عربی
              </p>
            </a>
          </Link>
        </div>
        {sidebarLinks1.map((item) => {
          return (
            <Link href={item.href} key={item.name}>
              <a>
                <p
                  className="my-4 font-light"
                  onClick={() => {
                    setSidebar(false);
                  }}
                >
                  {intl.formatMessage({ id: `page.header.${item.name}` })}
                </p>
              </a>
            </Link>
          );
        })}
        <h3 className="font-bold">
          <FormattedMessage id="page.header.lookingFor" />
        </h3>
        {categories.map((item) => {
          return (
            <Link href={"/" + titleToSlugConverter(item.title)} key={item.id}>
              <a>
                <p
                  className="my-3 break-all"
                  onClick={() => {
                    setSidebar(false);
                  }}
                >
                  {item.title}
                </p>
              </a>
            </Link>
          );
        })}
      </div>
      {/* Desktop header */}
      <div className="hidden md:flex md:container md:mx-auto md:px-3 md:max-w-[90%] lg:max-w-[80%] md:justify-between">
        <div className="flex items-center gap-16 w-[80%] ">
        <Link href="/">
          <a>
            <img src="/logo.png" className="" />
          </a>
        </Link>
        <div className="flex items-center  gap-8">
          {headerLinks.map((item) => {
            return (
              <HeaderLink
                key={item.name}
                href={item.href}
                name={intl.formatMessage({ id: `page.header.${item.name}` })}
              />
            );
          })}
        </div>
        </div>
        <div className="flex  items-center justify-center">
          <Link href={"/"} locale="en">
            <a>
              <p className={`font-[500] ${router.locale === "en" && "yellow"}`}>
                English
              </p>
            </a>
          </Link>
          <p className="mx-2">|</p>
          <Link href={"/"} locale="ar">
            <a>
              <p className={`font-[500] ${router.locale === "ar" && "yellow"}`}> عربی</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

const HeaderLink = ({ name, href }) => {
  const router = useRouter();
  const pN = router.asPath;
  return (
    <Link href={href}>
      <a>
        <p className={`${pN === href && "font-bold"}`}>{name}</p>
      </a>
    </Link>
  );
};

const headerLinks = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "blog",
    href: "/blog",
  },
  {
    name: "bmi",
    href: "/bmi",
  },
  {
    name: "contact",
    href: "/contact",
  },
];
const sidebarLinks1 = [
  {
    name: "downloadApp",
    href: "/",
  },
  {
    name: "blog",
    href: "/blog",
  },
  {
    name: "terms",
    href: "/termsandconditions",
  },
  {
    name: "contact",
    href: "/contact",
  },
];
