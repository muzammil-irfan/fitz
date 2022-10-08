import React,{ useEffect } from 'react'
import Heading from '../common/Heading'
import Slider from "react-slick";
import backendHost from '../../utils/backendHost';
import axios from 'axios';
export default function LookingForSection() {
    const setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
        useEffect(()=>{
          axios.get(`${backendHost}/category/`)
          .then(res=>{
            console.log(res);
          })
          .catch(err=>{
            console.log(err);
          });
        },[])
  return (
    <div className='px-2'>
        <Heading className={"md:text-center"}>
            What are you <span className='yellow block md:inline'>looking for?</span> 
        </Heading>
        
    </div>
  )
}
