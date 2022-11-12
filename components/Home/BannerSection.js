import React from "react";
import Slider from "react-slick";

export default function BannerSection() {
  const sliderRef = React.useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden relative">
      <div
        className="absolute z-10  top-1/3 hidden md:block left-10 "
        onClick={() => sliderRef?.current?.slickPrev()}
        style={{cursor:"pointer"}}
      >
        <svg
          width="28"
          height="106"
          viewBox="0 0 28 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26 104L1.99999 53L26 2"
            stroke="#FBAC18"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {bannerData.map((item, index) => {
          return (
            <div key={item.url}>
              <div className="relative max-w-100 ">
                <picture>
                  <source srcSet={item.url} />
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="img max-h-[50vw] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[700px] 2xl:min-h-[900px]"
                  />
                </picture>
              </div>
            </div>
          );
        })}
      </Slider>
      <div
        className="absolute z-10  top-1/3 hidden md:block right-10"
        onClick={() => sliderRef?.current?.slickNext()}
        style={{cursor:"pointer"}}
      >
        <svg
          width="28"
          height="106"
          viewBox="0 0 28 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 104L26 53L1.99999 2"
            stroke="#FBAC18"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
const bannerData = [
  {
    url: "/home/banner-1.png",
    alt: "banner",
  },
  {
    url: "/home/banner-2.png",
    alt: "banner",
  },
  {
    url: "/home/banner-3.png",
    alt: "banner",
  },
  {
    url: "/home/banner-4.png",
    alt: "banner",
  }
];
