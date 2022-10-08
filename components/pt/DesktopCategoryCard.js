import Image from 'next/image'
import React from 'react'
import {BsFacebook,BsInstagram} from 'react-icons/bs';
import { BiMap,BiDollarCircle } from 'react-icons/bi';
import {TbWorld} from 'react-icons/tb';

export default function DesktopCategoryCard({imageAlt,imageSrc,title,description,location,amount,language}) {
  return (
    <div className='hidden sm:flex shadow-md m-4'>
        <div className='w-2/3 xl:w-1/4  relative aspect-square'>
            <Image src={"/pt/fitness"+imageSrc} alt={imageAlt} layout="fill"  />
        </div>
        <div className='p-5'>
            <div className='flex justify-between '>
                <p className='text-lg font-bold'>
                    {title}
                </p>
                <div className='flex gap-3 yellow'>
                    <BsFacebook />
                    <BsInstagram />
                </div>
            </div>
            <p className='py-5'>{description}</p>
            <div className='py-2 flex gap-2 items-center'>
                <BiMap />
                <p>{location}</p>               
            </div>    
            <div className='py-2 flex gap-2 items-center'>
                <BiDollarCircle />
                <p>{amount} JOD/hr</p>               
            </div>    
            <div className='py-2 flex gap-2 items-center'>
                <TbWorld />
                <p>{language}</p>               
            </div>    
        </div>

    </div>
  )
}