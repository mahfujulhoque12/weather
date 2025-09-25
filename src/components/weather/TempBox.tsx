/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import React from "react";
import { HiSun } from "react-icons/hi";
import { useWeatherStore } from "@/store/apiStore";
import Image from "next/image";
import countries from "i18n-iso-countries";

// get all country name
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const TempBox = () => {
  const { weather } = useWeatherStore();
  if (!weather) return null;

  const cityName = weather.name;
  const countryCode = weather.sys?.country;
  const country = countryCode
    ? countries.getName(countryCode, "en")
    : countryCode;

  const temp = Math.round(weather.main?.temp);
  const date = new Date(weather.dt * 1000).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const weatherCondition = weather.weather[0]?.main || "";
  const iconCode = weather.weather[0]?.icon;
  const iconUrl = iconCode
    ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    : "/weather/stick.png";

  return (
    <div className="p-8 sm:p-[32px] rounded-2xl w-full bg-gradient-to-br from-[#2563EB] to-[#9333EA] text-white font-medium">
      <div className="flex justify-between gap-3">
        {/* Left side: City, Date, Icon */}
        <div>
          <h2 className="text-white font-semibold text-xl sm:text-2xl">
            {cityName}, {country}
          </h2>
          <p className="text-sm font-normal text-[#DBEAFE] mb-6">{date}</p>
          <span className="text-yellow-400">
            <HiSun size={24} />
          </span>
        </div>

        {/* Right side: Weather icon + condition */}
        <div className="flex flex-col items-center">
          <Image src={iconUrl} alt={weatherCondition} width={30} height={30} />
          <span className="text-white text-xs font-light">
            {weatherCondition}
          </span>
        </div>
      </div>

      {/* Temperature */}
      <div>
        <h2 className="text-[72px] sm:text-[72px] font-light text-end">
          {temp}°
        </h2>
      </div>
    </div>
  );
};

export default TempBox;
