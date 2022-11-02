import Link from "next/link";
import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";
import titleToSlugConverter from "../../utils/titleToSlugConverter";

export default function Footer({categories}) {
  const intl = useIntl();
  return (
    <footer className="yellow-background py-8 ">
      <div className="container mx-auto px-3">
        <img src="/logo-white.png"  />
        <div className="flex justify-between my-4 pb-5 flex-col md:flex-row gap-2 ">
          {/* First part of footer */}
          <div className="mb-5 md:mb-0">
            <p className="w-80 my-2 ">
              <FormattedMessage id="page.footer.description" />
            </p>
            <div className="flex gap-5 py-2">
              <BsFacebook size="24px" />
              <BsTwitter size="24px" />
              <BsInstagram size="24px" />
            </div>
          </div>
          <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3">
            <LinkDisplayer name={intl.formatMessage({id:`page.header.${linksData[0].name}`})} href={linksData[0].href} />
            {categories.map(item=>{
              return <LinkDisplayer name={item.title} href={"/"+titleToSlugConverter(item.title)} key={item.id} />
            })}
          </div>
          {/* Fourth part of footer */}
          <div className="flex md:flex-col md:items-center gap-3 mt-5">
            <Image src="/app-store-button.png" width="145px" height="50px" layout='fixed' />
            <Image src="/playstore-button.png" width="145px" height="50px" layout='fixed' />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center sm:flex-row gap-5 pt-8 border-t " >
            <p>
              <FormattedMessage id="page.footer.madeWith" />
            </p>
            {
                linksData.slice(1).map(item=>{
                    return <LinkDisplayer href={item.href} name={intl.formatMessage({id:`page.header.${item.name}`})} key={item.name} />
                })
            }
        </div>
      </div>
    </footer>
  );
}
const LinkDisplayer = ({ name,href }) => {
  return (
    <Link href={href}>
      <a>
        <p className="break-all text-xs my-2">{name}</p>
      </a>
    </Link>
  );
};
const linksData = [
  {
    name: "blog",
    href: "/blog",
  },    
  {
    name: "contact",
    href: "/contact",
  },
  {
    name: "terms",
    href: "/termsandconditions",
  },
];
