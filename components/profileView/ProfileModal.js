import React from "react";
import Slider from "react-slick";
import { AiOutlineClose } from "react-icons/ai";

export default function ProfileModal({ modal, setModal, media }) {
  const sliderRef = React.useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleClose = ()=>{
    setModal(false);
    document.body.style.overflow = "unset";
  }
  return (
    <div
      className={`${
        modal ? "" : "hidden"
      } fixed top-0 w-screen h-screen bg-gray-100/50 z-[100]  `}
      
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute h-screen w-screen " onClick={handleClose}>

        </div>
        <div className="bg-white container pb-10 w-[90%] shadow-xl z-[102]">
          <div className="flex justify-end pr-1 sm:pr-5">
            <div className="relative top-10 bg-slate-300 p-2 rounded-full" onClick={handleClose} style={{cursor:"pointer"}}>
              <AiOutlineClose size="24px" />
            </div>
          </div>
          <div className="flex justify-evenly items-center gap-5 h-full ">
            <div
              onClick={() => sliderRef?.current?.slickNext()}
              style={{ cursor: "pointer" }}
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
            <div className="w-3/4">
              <Slider {...settings} ref={sliderRef}>
                {media.map((item) => {
                  return <img src={item} key={item} className="px-1" />;
                })}
              </Slider>
            </div>
            <div
              className=""
              onClick={() => sliderRef?.current?.slickNext()}
              style={{ cursor: "pointer" }}
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
        </div>
      </div>
    </div>
  );
}
