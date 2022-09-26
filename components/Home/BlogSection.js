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
    slidesToScroll: 1,
  };
  return (
    <div className="text-center ">
      <Heading>
        From Our <span className="yellow">Blogs</span>
      </Heading>
      <div className="my-5">
      <Slider {...settings}>
        <BlogCard
          imageSrc={"/blog/image-1.png"}
          category="case study"
          title="Sed do eiusmod tempor 8% incididunt ut labore et."
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu reprehenderit fugiat."
        />
        <BlogCard
          imageSrc={"/blog/image-2.png"}
          category="video"
          title="Oed emasn eiusmod tempor incididunt labore et dolor."
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat،Excepteur sint occaecat cupidatat"
        />
        <BlogCard
          imageSrc={"/blog/image-3.png"}
          category="article"
          title="Dolor masn eiusmod tempor  labore et occaecat."
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
        />
      </Slider>
      </div>
    </div>
  );
}
