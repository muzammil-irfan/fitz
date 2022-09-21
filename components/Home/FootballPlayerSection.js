import Image from "next/image";
import React from "react";
import Heading from "../common/Heading";

export default function FootballPlayerSection() {
  return (
    <div className="relative">
      <div className="relative top-10">
        <Image src="/home/football-player.png" layout="responsive" height="100px" width="80vw" />
      </div>
      {/* <div className="z-10 relative w-1/3 mx-16">
        <Heading>
          Lorem ipsum <span className="yellow">dolor sit</span> amet, consectetur
        </Heading>
        <p className="my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur elit.
        </p>
      </div> */}
    </div>
  );
}
