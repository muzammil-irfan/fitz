import React from "react";
import Heading from "../common/Heading";
import BlogCard from "../common/BlogCard";
import Slider from "react-slick";

export default function BlogSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlides:0,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 700 ,
        settings: {
          slidesToShow: 1.5
        }
      },
      {
        breakpoint: 480 ,
        settings: {
          slidesToShow: 1.05
        }
      }
    ]
  };
  return (
    <div className="sm:text-center overflow-hidden px-2 ">
      <Heading className={"text-3xl my-5 lg:my-10"}>
        From Our <span className="yellow">Blogs</span>
      </Heading>
      {/* <div className="my-5"> */}
      <Slider {...settings}>
        <BlogCard
          href="/"
          imageSrc={"/blog/image-1.png"}
          category="case study"
          title="Sed do eiusmod tempor 8% incididunt ut labore et."
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu reprehenderit fugiat."
        />
        <BlogCard
        href="/"
          imageSrc={"/blog/image-2.png"}
          category="video"
          title="Oed emasn eiusmod tempor incididunt labore et dolor."
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat،Excepteur sint occaecat cupidatat"
        />
        <BlogCard
        href="/"
          imageSrc={"/blog/image-3.png"}
          category="article"
          title="Dolor masn eiusmod tempor  labore et occaecat."
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
        />
      </Slider>
      {/* </div> */}
    </div>
  );
}
