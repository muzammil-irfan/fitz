import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';

export default function BannerSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
        <div>
        <Slider {...settings}>
          {
            bannerData.map((item,index)=>{
                return (
                    <div key={item.url} >
                        <div className="relative bottom-10 aspect-video">
                            <Image src={item.url} alt={item.alt} layout='fill' objectFit='contain' />
                        </div>  
                    </div>
                )
            })
          }
        </Slider>
      </div>
    </>
  )
}
const bannerData = [
    {
        url:"/home/banner-1.png",
        alt:"banner"
    },
    {
        url:"/home/football-player.png",
        alt:"banner"
    },
];