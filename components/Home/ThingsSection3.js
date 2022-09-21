import Image from 'next/image'
import React from 'react'
import CustomButton from '../common/CustomButton'
import Heading from '../common/Heading'
import {BsArrowRightShort} from 'react-icons/bs';

export default function ThingsSection3() {
  return (
    <div className='flex justify-evenly  px-5 py-10'>
        <div className='flex flex-col gap-5 w-1/3 justify-center'>
            <Heading >
            Lorem <span className='yellow'>ipsumsim</span> dolor amet
            </Heading>
            <p className='text-slate-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur elit.
            </p>
            <div>
            <CustomButton arrow>
              <p>See more </p>
              <BsArrowRightShort  size="24px"  />
            </CustomButton>
            </div>
        </div>
        <div className='aspect-square relative w-2/5'  >
            <Image src="/home/image3.png" layout='fill' />
        </div>
    </div>
  )
}
