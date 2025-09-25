/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useWeatherStore } from "@/store/apiStore";
import {
  WiDaySunny,
  WiCloud,
  WiNightClear,
  WiDayCloudy,
  WiRain,
} from "react-icons/wi";
import React from "react";

const Hourly = () => {
  const { forecast } = useWeatherStore();

  //  icon based on weather description
  const getIcon = (main: string) => {
    switch (main) {
      case "Clear":
        return <WiDaySunny className="text-yellow-400 text-2xl" />;
      case "Clouds":
        return <WiDayCloudy className="text-gray-300 text-2xl" />;
      case "Rain":
        return <WiRain className="text-blue-400 text-2xl" />;
      case "Night":
        return <WiNightClear className="text-indigo-500 text-2xl" />;
      default:
        return <WiCloud className="text-gray-400 text-2xl" />;
    }
  };

  // Map forecast.list to hourly data (limit 8 for next 24h)
  const hourlyData =
    forecast?.list?.slice(0, 8).map((item: any) => {
      const date = new Date(item.dt * 1000);
      const hours = date.getHours();
      const hours12 = hours % 12 === 0 ? 12 : hours % 12;
      const ampm = hours >= 12 ? "PM" : "AM";
      const time = `${hours12} ${ampm}`;
      return {
        time,
        temperature: Math.round(item.main.temp) + "°",
        icon: getIcon(item.weather[0].main),
      };
    }) || [];

  // Extract today’s name
  const today = forecast
    ? new Date(forecast.list[0].dt * 1000).toLocaleDateString("en-US", {
        weekday: "long",
      })
    : "";

  return (
    <div className="bg-button border border-button-border h-full rounded-2xl p-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white text-base sm:text-lg font-bold">
          Hourly forecast
        </h2>
        <span className="bg-[#374151] w-[120px] border border-[#4B5563] text-white text-sm font-normal py-1 px-3 rounded-lg">
          {today}
        </span>
      </div>
      <div className="space-y-2 mt-[28px]">
        {hourlyData.length > 0 ? (
          hourlyData.map((hour, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 text-white border-b border-button-border last:border-b-0"
            >
              <div className="flex items-center gap-2 text-base font-normal">
                {hour.icon}
                <span>{hour.time}</span>
              </div>
              <span className="text-lg">{hour.temperature}</span>
            </div>
          ))
        ) : (
          <p className="text-white">No hourly data available</p>
        )}
      </div>
    </div>
  );
};

export default Hourly;
