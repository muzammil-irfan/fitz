import React from 'react'
import Heading from '../../../components/common/Heading'
import { BiMap, BiDollarCircle } from "react-icons/bi";
import { TbWorld,TbMap2 } from "react-icons/tb";

export default function Lena() {
  return (
    <div>
        <Heading className="py-3">
            More Details
        </Heading>
        <div className="py-2 flex gap-2 items-center">
          <BiMap />
          <p>Amman, Jordan</p>
        </div>
        <div className="py-2 flex gap-2 items-center">
          <BiDollarCircle />
          <p>{25} JOD/hr</p>
        </div>
        <div className="py-2 flex gap-2 items-center">
          <TbWorld />
          <p>Arabic, English</p>
        </div>
        <div className="py-2 flex gap-2 items-center">
          <TbMap2 />
          <p>At Home, Outside, Gym, Online</p>
        </div>
        <Heading className="py-3">
            <span className='yellow'>Sports</span>
        </Heading>
        <ul className='list-disc ml-5 '>
        {
            sportsList.map(item=>{
                return <li key={item} className="my-3">{item}</li>
            })
        }
        </ul>
    </div>
  )
}
const sportsList = [
    "Core Fitness",
    "Muscle Toning",
    "Yoga",
    "Kickboxing",
    "Gain Muscle"
]