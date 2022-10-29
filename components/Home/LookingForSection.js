import React, { useContext, useEffect } from "react";
import Heading from "../common/Heading";
import Slider from "react-slick";
import backendHost from "../../utils/backendHost";
import axios from "axios";
import { CategoriesContext } from "../context/categories";
import Image from "next/image";
import Link from 'next/link';
import titleToSlugConverter from "../../utils/titleToSlugConverter";

export default function LookingForSection({data}) {
  const { categories,getCategories } = useContext(CategoriesContext);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 3.4,
          // slidesToScroll: 2,
        },
      },
    ],
  };
  useEffect(() => {//category/
    // getCategories();
    axios.get(`${backendHost}/category`)
    .then(res=>{
      console.log("got,",res);
    })
    .catch(err=>{
      console.log("err",err)
    })
  }, []);
  // console.log(categories)
  return (
    <div className="p-2 mb-5 overflow-hidden">
      <Heading className={"text-3xl md:text-center my-4 lg:mb-8"}>
        What are you{" "}
        <span className="yellow block md:inline">looking for?</span>
      </Heading>
      <div className="py-5 lg:px-5">
        <Slider {...settings}>
          {
            data.map(item=>{
              return <SkewedCard href={`/${titleToSlugConverter(item.title)}`} name={item.title} image={"https://"+item.img} key={item.id} id={item.id} />
            })
          }
        </Slider>
      </div>
    </div>
  );
}
const SkewedCard = ({href,image,name,id})=>{
  return(
    <Link href={href} passHref>
    <div className="bg-white -skew-x-6  shadow-inner drop-shadow-sm flex flex-col items-center mt-5 mx-2 lg:mx-3" style={{cursor:'pointer'}}> 
      <div className="relative  bottom-5 skew-x-6 h-[80px] w-[60px] " >
        <Image src={image} alt={name} layout="fill" />
      </div>
      <p className="text-center text-xs p-1">
        {name}
      </p>
    </div>
    </Link>
  )
}
