import Image from 'next/image'
import React from 'react'
import Heading from '../common/Heading'
import Text from '../common/Text'
import { FormattedMessage } from 'react-intl'

export default function ThingsSection() {
  return (
    <div className='flex justify-evenly bg-gray-100 sm:px-5 py-10'>
        <div className='aspect-square relative w-2/5 max-w-[500px]'  >
            <Image src="/home/image1.png" layout='fill' />
        </div>
        <div className='flex flex-col sm:gap-10 w-1/2 md:w-1/3 lg:w-[600px] justify-center'>
            <Heading className={"text-lg xl:text-[56px]"}>
            <FormattedMessage id="page.home.thingsSection1.title"   />
            </Heading>
            <Text className='text-slate-500 xl:text-xl'>
            <FormattedMessage id="page.home.thingsSection1.description"  />
            </Text>
        </div>
    </div>
  )
}
