import React, { useContext, useEffect } from "react";
import Heading from "../common/Heading";
import Slider from "react-slick";
import backendHost from "../../utils/backendHost";
import axios from "axios";
import { CategoriesContext } from "../context/categories";
import Image from "next/image";

export default function LookingForSection() {
  const { categories } = useContext(CategoriesContext);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {//category/
    axios
      .get(`${backendHost}/blog/`, {
        headers: {
          "Accept-Language": "en",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="px-2">
      <Heading className={"md:text-center"}>
        What are you{" "}
        <span className="yellow block md:inline">looking for?</span>
      </Heading>
      <div className="my-5">
        <Slider {...settings}>
          {
            categories.map(item=>{
              return <SkewedCard name={item.title} image={item.image} key={item.id} id={item.id} />
            })
          }
        </Slider>
      </div>
    </div>
  );
}
const SkewedCard = ({image,name,id})=>{
  return(
    <div style={{transform:"skew(-5deg,5deg) m-2"}}> 
      <div className="relative m-2 shadow-md h-[150px] w-[120px]" >
        {/* <Image src={image} layout="responsive" height={"60px"} weight="100px" /> */}
      </div>
      <p className="text-center ">

      </p>
    </div>
  )
}