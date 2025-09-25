"use client";
import Image from "next/image";
import React from "react";
import { HiSun } from "react-icons/hi";
import { useWeatherStore } from "@/store/apiStore";

const TempBox = () => {
  const { weather } = useWeatherStore();

  if (!weather) return null;

  // Extract data safely
  const cityName = weather.name;
  const country = weather.sys?.country;
  const temp = Math.round(weather.main?.temp); // round temperature
  const date = new Date(weather.dt * 1000).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

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

        {/* Right side: Weather icon */}
        <div>
          <Image
            src={`/weather/stick.png`} // use weather icon from API
            width={16}
            height={16}
            alt={weather.weather[0]?.main}
          />
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
