import Image from 'next/image'
import React from 'react'
import Heading from '../common/Heading'
import Text from '../common/Text'
import { FormattedMessage } from 'react-intl'

export default function ThingsSection() {
  return (
    <div className='flex justify-evenly bg-gray-100 px-5 py-10'>
        <div className='aspect-square relative w-2/5'  >
            <Image src="/home/image1.png" layout='fill' />
        </div>
        <div className='flex flex-col gap-5 w-1/2 md:w-1/3 justify-center'>
            <Heading className={"text-md "}>
            {/* Lorem <span className='yellow'>ipsumsim</span> dolor amet */}
            <FormattedMessage id="page.home.thingsSection1.title"  />
            </Heading>
            <Text className='text-slate-500 '>
            <FormattedMessage id="page.home.thingsSection1.description"  />
            </Text>
        </div>
    </div>
  )
}
