import React from "react";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import Search from "./Search";
import Image from "next/image";
import Header from "./Header";
import { cn } from "@/lib/utils";
import { wrapperStyle } from "../common/CustomStyle";

const LandingCard = () => {
  return (
    <MaxWidthWrapper className={cn(wrapperStyle)}>
      <div className="w-full">
        {/* title part start*/}
        <Header />
        {/* title part end */}

        {/* serach part start  */}
        <Search />
        {/* serach part end  */}

        {/* bottom part start  */}
        <div className="mt-[50px] sm:mt-[96px]">
          <div className="flex justify-center">
            <Image
              src={"/landing/landing.png"}
              width={96}
              height={96}
              alt="lading-img"
            />
          </div>
          <p className="mt-4.5 text-paragraph font-normal text-lg text-center">
            Search for a city to see weather information
          </p>
        </div>
        {/* bottom part end  */}
      </div>
    </MaxWidthWrapper>
  );
};

export default LandingCard;
