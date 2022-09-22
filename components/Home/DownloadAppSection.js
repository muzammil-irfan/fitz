import Image from "next/image";
import React from "react";
import CustomButton from "../common/CustomButton";
import Heading from "../common/Heading";
import Text from "../common/Text";
import { BsArrowRightShort } from "react-icons/bs";

export default function DownloadAppSection() {
  return (
    <div className="flex justify-evenly bg-slate-50 px-5 pt-10">
      <div className="aspect-square relative w-2/5">
        <Image src="/home/download-app.png" layout="fill" />
      </div>
      <div className="flex flex-col gap-5 w-1/3 justify-center">
        <Heading>
          <span className="yellow">Download</span><br /> The App
        </Heading>
        <Text className="text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur
          elit.
        </Text>
        <div className="flex items-center gap-3 my-2 w-1/2 ">
          <img src="/app-store-black-button.png" />
          <img src="/playstore-black-button.png" />
        </div>
      </div>
    </div>
  );
}
