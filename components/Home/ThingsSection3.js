import Image from 'next/image'
import React from 'react'
import CustomButton from '../common/CustomButton'
import Heading from '../common/Heading'
import {BsArrowRightShort} from 'react-icons/bs';
import Text from '../common/Text';
import SeeMoreButton from '../common/SeeMoreButton';
import { FormattedMessage } from 'react-intl'

export default function ThingsSection3() {
  return (
    <div className='flex justify-evenly  px-5 py-10'>
        <div className='flex flex-col gap-5 w-1/3 justify-center'>
            <Heading className={"text-xl"} >
            <FormattedMessage id="page.home.thingsSection3.title"  />
            </Heading>
            <Text className='text-slate-500'>
            <FormattedMessage id="page.home.thingsSection3.description"  />
            </Text>
            <div>
            <SeeMoreButton />
            </div>
        </div>
        <div className='aspect-square relative w-2/5'  >
            <Image src="/home/image3.png" layout='fill' />
        </div>
    </div>
  )
}
