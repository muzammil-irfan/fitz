import React, { useEffect } from "react";
import Heading from "../common/Heading";
import Slider from "react-slick";
import backendHost from "../../utils/backendHost";
import axios from "axios";
// import { CategoriesContext } from "../context/categories";
import Image from "next/image";
import Link from "next/link";
import titleToSlugConverter from "../../utils/titleToSlugConverter";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";

export default function LookingForSection({ data }) {
  // const { categories,getCategories } = useContext(CategoriesContext);
  const {locale} = useRouter();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    initialSlide: 0,
    slidesToScroll:3,
    rtl:locale === "ar" ,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 5.5,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3.5,
          
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 3.1,
          
        },
      },
    ],
  };
  return (
    <div className="py-2  pl-2 md:pl-0 mt-3 md:mt-10 md:py-20  overflow-hidden ">
      <Heading className={"text-3xl md:text-center mb-4 lg:mb-8"}>
        <FormattedMessage
          id="page.home.lookingFor.title"
          values={{ b: (chunks) => <span className="yellow">{chunks}</span> }}
        />
      </Heading>
      <div className="pt-5 lg:px-5 relative  " style={{cursor:"grab"}}>
          <div className="h-full w-[50px] top-0 left-[0] z-10 absolute " style={{background:"linear-gradient(90deg,rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)"}}></div>
        <Slider {...settings}>
          {data.map((item) => {
            return (
              
              <SkewedCard
                href={`/${titleToSlugConverter(item.title)}`}
                name={item.title}
                image={"https://" + item.img}
                key={item.id}
                id={item.id}
              />
            );
          })}
        </Slider>
        <div className="h-full w-[50px] top-0 right-[0]  absolute " style={{background:"linear-gradient(90deg,rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%)"}}></div>
      </div>
    </div>
  );
}
const SkewedCard = ({ href, image, name, id }) => {
  return (
    <div
      className="bg-white -skew-x-6  max-w-[180px] flex flex-col items-center my-5  mx-2  min-h-[110px]"
      style={{ boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="relative  bottom-5 skew-x-6 h-[13vw] sm:h-14 md:h-16 lg:h-20 xl:h-28 2xl:h-32  w-2/3">
        <Link href={href} passHref>
          <div style={{cursor:"pointer"}} >
          <Image
            src={image}
            alt={name}
            width="140px"
            height="140px"
            layout="responsive"
          />
          </div>
        </Link>
      </div>
      <p className="text-center text-xs py-2 break-all">{name}</p>
    </div>
  );
};
