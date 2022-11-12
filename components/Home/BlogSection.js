import React from "react";
import Heading from "../common/Heading";
import BlogCard from "../common/BlogCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from 'react-intl'
import { useRouter } from "next/router";

export default function BlogSection({ data }) {
  const {locale} = useRouter()
  const settings = {
    dots: false,
    Infinity: false,
    speed: 500,
    slidesToShow: data.length > 2 ? 3 : data.length,
    initialSlides: 0,
    rtl:locale==="ar",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5,

        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.05,
        },
      },
    ],
  };

  return (
    <div className="sm:text-center overflow-hidden px-2 ">
      <Heading className={"text-3xl my-5 lg:my-10 xl:text-[56px]"}>
        <FormattedMessage id="page.home.blogSection.title" values={{b:(chunks)=><span className="yellow">{chunks}</span>}} />
      </Heading>
      <div className="my-5 md:my-10">
      {data && data.length > 1   ? (
        <div style={{cursor:"grab"}} >
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <BlogCard
                key={item.slug}
                href={`/blog/${item.slug}`}
                imageSrc={item.media[0]}
                title={item.title}
              />
            );
          })}
        </Slider>
        </div>
      ) : data.length > 0 ? (
        <div className="flex justify-center flex-wrap">
          {data.map((item) => {
            return (
              <div className="max-w-[360px]" key={item.slug}>
              <BlogCard
                
                href={`/blog/${item.slug}`}
                imageSrc={item.media[0]}
                title={item.title}
              />
              </div>
            );
          })}
        </div>
      ) : (
        <div>No blogs posted yet</div>
      )}
      </div>
    </div>
  );
}
