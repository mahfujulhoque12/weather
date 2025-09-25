import { useWeatherStore } from "@/store/apiStore";
import React from "react";
import { FaCloudSunRain } from "react-icons/fa";
import { HiSun, HiCloud } from "react-icons/hi";

const Daily = () => {
  const { forecast } = useWeatherStore();

  // Helper: pick icon based on weather description
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

  // Group forecast by day (pick 1 reading per day, around 12:00)
  const dailyData =
    forecast?.list
      ?.filter((item: any) => item.dt_txt.includes("12:00:00")) // pick mid-day
      .slice(0, 7) // show next 7 days
      .map((item: any) => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString("en-US", { weekday: "short" });
        return {
          title: day,
          value: Math.round(item.main.temp_max) + "°",
          subValue: Math.round(item.main.temp_min) + "°",
          icon: getIcon(item.weather[0].main),
        };
      }) || [];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold text-white">Daily Forecast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-2 mt-4">
        {dailyData.length > 0 ? (
          dailyData.map((data, index) => (
            <div
              className="rounded-xl bg-button border border-button-border p-4 flex flex-col items-center justify-center"
              key={index}
            >
              <h4 className="text-paragraph font-normal text-sm ">
                {data.title}
              </h4>
              <span className="mt-3">{data.icon}</span>

              <p className="mt-5 text-sm font-normal text-white">
                {data.value}
              </p>
              <span className="text-xs font-normal text-paragraph">
                {data.subValue}
              </span>
            </div>
          ))
        ) : (
          <p className="text-paragraph text-sm">No forecast data available</p>
        )}
      </div>
    </div>
  );
};

export default Daily;
