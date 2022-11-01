import Image from "next/image";
import React from "react";
import CustomButton from "../common/CustomButton";
import Heading from "../common/Heading";
import Text from "../common/Text";
import 
 SeeMoreButton  from "../common/SeeMoreButton";
 import { FormattedMessage } from 'react-intl'

export default function FootballPlayerSection() {
  return (
    <div className="relative text-center">
        <img src="/home/football-player.png"  />
        <div className="absolute top-1/4 left-1/4 md:-translate-y-1/4 md:-translate-x-1/2 -translate-x-1/4 text-left w-1/2 md:w-1/3 pr-3">
      <Heading>
        {/* Lorem ipsum <span className="yellow">dolor sit</span> amet, consectetur */}
        <FormattedMessage id="page.home.footballSection.title"  />
      </Heading>
      <Text className="py-3 md:py-10 text-slate-500">
        <FormattedMessage id="page.home.footballSection.description"  />
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur elit. */}
      </Text>
      <SeeMoreButton />

        </div>
      {/* <div className="relative top-10"> */}
      {/* </div> */}
      {/* <div className="z-10 relative w-1/3 mx-16">
      </div> */}
    </div>
  );
}
