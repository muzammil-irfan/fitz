import Image from "next/image";
import React from "react";
import CustomButton from "../common/CustomButton";
import Heading from "../common/Heading";
import Text from "../common/Text";
import { BsArrowRightShort } from "react-icons/bs";
import { FormattedMessage } from 'react-intl'

export default function DownloadAppSection() {
  return (
    <div className="flex justify-evenly bg-slate-50 sm:px-5 pt-10">
      <div className="aspect-square relative w-2/5 lg:w-1/4">
        <Image src="/home/download-app.png" layout="fill" />
      </div>
      <div className="flex flex-col gap-3 sm:gap-5 w-1/3 justify-center">
        <Heading className="text-xl">
          <FormattedMessage id="page.home.downloadAppSection.title" values={{b:(chunks)=><span className="text-brand">{chunks}</span>}} />
        </Heading>
        <Text className="text-slate-500">
          <FormattedMessage id="page.home.downloadAppSection.description"  />
        </Text>
        <div className="flex items-center gap-3 my-2 w-1/2 ">
          <img src="/app-store-black-button.png" />
          <img src="/playstore-black-button.png" />
        </div>
      </div>
    </div>
  );
}
