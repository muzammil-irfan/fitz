import Image from 'next/image'
import React from 'react'
import Heading from '../common/Heading'
import Text from '../common/Text';
import SeeMoreButton from '../common/SeeMoreButton';
import { FormattedMessage } from 'react-intl'

export default function ThingsSection3() {
  return (
    <div className='flex justify-evenly  sm:px-5 py-10'>
        <div className='flex flex-col gap-1 sm:gap-5 xl:gap-8 w-1/2 max-w-[600px] justify-center'>
            <Heading className={"text-lg xl:text-[56px]"} >
            <FormattedMessage id="page.home.thingsSection3.title"  />
            </Heading>
            <Text className='text-slate-500 xl:text-xl'>
            <FormattedMessage id="page.home.thingsSection3.description"  />
            </Text>
            <div>
            <SeeMoreButton />
            </div>
        </div>
        <div className='aspect-square relative w-2/5 max-w-[480px]'  >
            <Image src="/home/image3.png" layout='fill' />
        </div>
    </div>
  )
}
