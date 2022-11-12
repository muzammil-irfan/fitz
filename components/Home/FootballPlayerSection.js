import React from "react";
import Heading from "../common/Heading";
import Text from "../common/Text";
import SeeMoreButton from "../common/SeeMoreButton";
import { FormattedMessage } from "react-intl";

export default function FootballPlayerSection() {
  return (
    <div className="relative text-center">
      <img src="/home/football-player.png" className="img xl:max-h-[870px]" />
      <div className="absolute top-8 sm:top-1/4 left-1/4 md:-translate-y-1/4 xl:translate-y-0 md:-translate-x-1/2 lg:-translate-x-1/4 -translate-x-1/4  text-left w-[50vw]  sm:w-1/2 md:w-1/3  lg:w-[660px] pr-3 ">
        <Heading className={"text-xl xl:text-[56px]"}>
          <FormattedMessage id="page.home.footballSection.title" />
        </Heading>
        <Text className="py-3 md:py-8 text-slate-500 xl:text-xl">
          <FormattedMessage id="page.home.footballSection.description" />
        </Text>
        <SeeMoreButton />
      </div>
    </div>
  );
}
