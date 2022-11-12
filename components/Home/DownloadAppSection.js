import Image from "next/image";
import React from "react";
import Heading from "../common/Heading";
import Text from "../common/Text";
import { FormattedMessage } from 'react-intl'

export default function DownloadAppSection() {
  return (
    <div className="flex justify-evenly bg-slate-50 sm:px-5 pt-10 md:pt-[100px]">
      <div className="relative w-2/5 max-w-[360px] min-h-[400px]">
        <Image src="/home/download-app.png" layout="fill" />
      </div>
      <div className="flex flex-col gap-1 sm:gap-5 md:gap-10 md:justify-start w-1/3 justify-center">
        <Heading className="text-lg xl:text-[56px]">
          <FormattedMessage id="page.home.downloadAppSection.title" values={{b:(chunks)=><span className="text-brand">{chunks}</span>}} />
        </Heading>
        <Text className="text-slate-500 ">
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
