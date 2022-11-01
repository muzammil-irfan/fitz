import React from "react";
import Heading from "../common/Heading";
import BlogCard from "../common/BlogCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from 'react-intl'

export default function BlogSection({ data }) {
  const settings = {
    dots: false,
    Infinity: false,
    speed: 500,
    slidesToShow: 3,
    initialSlides: 0,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          // initialSlide: 2
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
      <Heading className={"text-3xl my-5 lg:my-10"}>
        {/* From Our <span className="yellow">Blogs</span> */}
        <FormattedMessage id="page.home.blogSection.title" />
      </Heading>
      {/* <div className="my-5"> */}
      {data && data.length > 2 ? (
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
      ) : data.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 my-5">
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
        </div>
      ) : (
        <div>No blogs posted yet</div>
      )}
      {/* </div> */}
    </div>
  );
}
