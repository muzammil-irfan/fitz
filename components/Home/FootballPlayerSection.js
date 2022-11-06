import Image from "next/image";
import React from "react";
import CustomButton from "../common/CustomButton";
import Heading from "../common/Heading";
import Text from "../common/Text";
import SeeMoreButton from "../common/SeeMoreButton";
import { FormattedMessage } from "react-intl";

export default function FootballPlayerSection() {
  return (
    <div className="relative text-center">
      <img src="/home/football-player.png" className="img" />
      <div className="absolute top-1/4 left-1/4 md:-translate-y-1/4 md:-translate-x-1/2 -translate-x-1/4 text-left w-1/2 md:w-1/3 pr-3">
        <Heading className={"text-xl"}>
          <FormattedMessage id="page.home.footballSection.title" />
        </Heading>
        <Text className="py-3 md:py-10 text-slate-500">
          <FormattedMessage id="page.home.footballSection.description" />
        </Text>
        <SeeMoreButton />
      </div>
    </div>
  );
}
