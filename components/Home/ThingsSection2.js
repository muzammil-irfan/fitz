import Image from 'next/image'
import React from 'react'
import CustomButton from '../common/CustomButton'
import Heading from '../common/Heading'
import {BsArrowRightShort} from 'react-icons/bs';
import Text from '../common/Text'

export default function ThingsSection2() {
  return (
    <div className='flex justify-evenly bg-slate-50 px-5 py-10'>
        <div className='aspect-square relative w-2/5'  >
            <Image src="/home/image2.png" layout='fill' />
        </div>
        <div className='flex flex-col gap-5 w-1/3 justify-center'>
            <Heading >
            Lorem <span className='yellow'>ipsumsim</span> dolor amet
            </Heading>
            <Text className='text-slate-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur elit.
            </Text>
            <div>
            <CustomButton arrow>
              <p className='w-16'>See more </p>
              <BsArrowRightShort  size="24px"  />
            </CustomButton>
            </div>
        </div>
    </div>
  )
}