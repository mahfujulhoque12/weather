/* eslint-disable @typescript-eslint/no-explicit-any */
import { useWeatherStore } from "@/store/apiStore";
import React from "react";
import { FaCloudSunRain } from "react-icons/fa";
import { HiSun, HiCloud } from "react-icons/hi";

const Daily = () => {
  const { forecast } = useWeatherStore();

  const getIcon = (main: string) => {
    switch (main) {
      case "Clear":
        return <HiSun className="text-yellow-400 w-6 h-6" />;
      case "Clouds":
        return <HiCloud className="text-gray-400 w-6 h-6" />;
      case "Rain":
        return <FaCloudSunRain className="text-blue-400 w-6 h-6" />;
      default:
        return <HiCloud className="text-gray-300 w-6 h-6" />;
    }
  };

  const groupByDay = (list: any[]) => {
    const days: { [key: string]: any[] } = {};
    list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const day = date.toLocaleDateString("en-US", { weekday: "long" });
      if (!days[day]) days[day] = [];
      days[day].push(item);
    });
    return days;
  };

  const dailyDataFromList = (list: any[]) => {
    const grouped = groupByDay(list);
    return Object.keys(grouped).map((day) => {
      const items = grouped[day];
      const temps = items.map((i) => i.main.temp);
      const max = Math.max(...temps);
      const min = Math.min(...temps);
      const main = items[0].weather[0].main;
      return { day, max, min, main };
    });
  };

  const dailyForecast = forecast?.list ? dailyDataFromList(forecast.list) : [];

  const today = new Date();
  const next7Days = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  });

  const dailyData = next7Days.map((dayName) => {
    const found = dailyForecast.find((d) => d.day === dayName);

    if (found) {
      return {
        title: found.day,
        value: Math.round(found.max) + "°",
        subValue: Math.round(found.min) + "°",
        icon: getIcon(found.main),
      };
    } else {
      const last = dailyForecast[dailyForecast.length - 1];
      return {
        title: dayName,
        value: Math.round(last.max) + "°",
        subValue: Math.round(last.min) + "°",
        icon: getIcon(last.main),
      };
    }
  });

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold text-white">Daily Forecast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-2 mt-4">
        {dailyData.map((data, index) => (
          <div
            className="rounded-xl bg-button border border-button-border p-4 flex flex-col items-center justify-center"
            key={index}
          >
            <h4 className="text-paragraph font-normal text-sm">{data.title}</h4>
            <span className="mt-3">{data.icon}</span>
            <p className="mt-5 text-sm font-normal text-white">{data.value}</p>
            <span className="text-xs font-normal text-paragraph">
              {data.subValue}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Daily;
