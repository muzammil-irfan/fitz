import Image from 'next/image'
import React from 'react'
import CustomButton from '../common/CustomButton'
import Heading from '../common/Heading'
import {BsArrowRightShort} from 'react-icons/bs';
import Text from '../common/Text'
import SeeMoreButton from '../common/SeeMoreButton';
import { FormattedMessage } from 'react-intl'
export default function ThingsSection2() {
  return (

    <div className='flex justify-evenly bg-slate-50 sm:px-5 py-10'>
        <div className='aspect-square relative w-2/5 max-w-[420px]'  >
            <Image src="/home/image2.png" layout='fill' />
        </div>
        <div className='flex flex-col gap-1 sm:gap-5 xl:gap-8 w-1/2 max-w-[600px] justify-center'>
            <Heading className="text-lg xl:text-[56px]" >
            <FormattedMessage id="page.home.thingsSection2.title"  />
            </Heading>
            <Text className='text-slate-500 xl:text-xl' >
            <FormattedMessage id="page.home.thingsSection2.description"  />
            </Text>
            <div>
            <SeeMoreButton />
            </div>
        </div>
    </div>
  )
}
