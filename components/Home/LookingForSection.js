import React from "react";
import Heading from "../common/Heading";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import titleToSlugConverter from "../../utils/titleToSlugConverter";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";

export default function LookingForSection({ data }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    initialSlide: 0,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5.9,
        },
      },
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 5.5,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 4.1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3.8,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2.8,
        },
      },
    ],
  };
  return (
    <div className="py-2  pl-2 md:pl-0 mt-3 md:mt-10 md:py-20  overflow-hidden ">
      <Heading
        className={"text-3xl md:text-center mb-4 lg:mb-8 xl:text-[56px]"}
      >
        <FormattedMessage
          id="page.home.lookingFor.title"
          values={{ b: (chunks) => <span className="yellow">{chunks}</span> }}
        />
      </Heading>
      <div className="pt-10 lg:mx-5 relative  " style={{ cursor: "grab" }}>
        <div
          className="h-full w-[50px] top-0 left-0 z-10 absolute"
          style={{
            background:
              "linear-gradient(90deg,rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
          }}
        ></div>
        <Slider {...settings} rtl={false}>
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
        <div
          className="h-full w-[50px] top-0 right-0 z-10   absolute "
          style={{
            background:
              "linear-gradient(90deg,rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%)",
          }}
        ></div>
      </div>
    </div>
  );
}
const SkewedCard = ({ href, image, name, id }) => {
  return (
    <div
      className="bg-white -skew-x-12 mx-1   max-w-[180px] flex flex-col items-center justify-between my-10 min-h-[100px]  md:min-h-[150px] lg:min-h-[200px] "
      style={{ boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)" }}
    >
      {/* <div className="relative  bottom-5 skew-x-6 h-[13vw] sm:min-h-14 md:min-h-16 lg:mi-h-20 xl:min-h-28 2xl:min-h-32  w-2/3"> */}
      <div className="relative bottom-5 md:bottom-10 h-[50px] ">
        <Link href={href} passHref>
          <div style={{ cursor: "pointer" }}>
            <picture>
              <source srcSet={image} />
              <img
                alt={""}
                className="skew-x-12 max-w-[60px] md:max-w-[140px] max-h-[70px]  md:max-h-[120px] lg:max-h-full"
                objectFit="contain"
              />
            </picture>
          </div>
        </Link>
      </div>
      <p className="text-center text-xs skew-x-12 lg:text-base py-2 overflow-hidden w-full">
        {name}
      </p>
    </div>
  );
};
