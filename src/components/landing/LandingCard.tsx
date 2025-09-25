import React from "react";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import Search from "./Search";
import Image from "next/image";
import Header from "./Header";
import { cn } from "@/lib/utils";
import { wrapperStyle } from "../common/CustomStyle";
import WeatherCard from "../weather/WeatherCard";
import { useWeatherStore } from "@/store/apiStore";

const LandingCard = () => {
  const { weather } = useWeatherStore();

  return (
    <MaxWidthWrapper className={cn(wrapperStyle)}>
      <div className="w-full py-[169px]">
        {/* title part start */}
        <Header />
        {/* title part end */}

        {/* search part start */}
        <Search />
        {/* search part end */}

        {/* Conditional rendering for show weather info */}
        {weather ? (
          <WeatherCard />
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
      </div>
    </MaxWidthWrapper>
  );
};

export default LandingCard;
