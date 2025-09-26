import React from "react";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { wrapperStyle } from "../common/CustomStyle";
import Header from "./Header";
import Search from "./Search";
import TempBox from "./TempBox";
import Details from "./Details";
import Daily from "./Daily";
import Hourly from "./Hourly";
import { useWeatherStore } from "@/store/apiStore";
import Image from "next/image";

const WeatherCard = () => {
  const { weather } = useWeatherStore();

  return (
    <MaxWidthWrapper className={cn(wrapperStyle)}>
      <div className="w-full py-[50px] sm:py-[130px]">
        {/* title part start*/}
        <Header />
        {/* title part end */}

        {/* serach part start  */}
        <Search />
        {/* serach part end  */}

        {/* weather details part start  */}
        {weather ? (
          <div className="flex flex-col xl:flex-row gap-6 mt-[32px]">
            {/* detial left part start  */}
            <div className="w-full xl:w-[65%]">
              <TempBox />
              <Details />
              <Daily />
            </div>
            {/* detial left part end  */}

            {/* detial right part start  */}
            <div className="w-full xl:w-[35%]">
              <Hourly />
            </div>
            {/* detial right part end  */}
          </div>
        ) : (
          <div className="mt-[50px] sm:mt-[96px]">
            <div className="flex justify-center">
              <Image
                src={"/landing/landing.png"}
                width={96}
                height={96}
                alt="landing-img"
              />
            </div>
            <p className="mt-4.5 text-paragraph font-normal text-lg text-center">
              Search for a city to see weather information
            </p>
          </div>
        )}
        {/* weather details part end  */}
      </div>
    </MaxWidthWrapper>
  );
};

export default WeatherCard;
