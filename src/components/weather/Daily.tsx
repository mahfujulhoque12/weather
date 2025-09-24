import React from "react";
import { FaCloudSunRain } from "react-icons/fa";
import { HiSun, HiCloud } from "react-icons/hi";

const Daily = () => {
  const detailsData = [
    {
      title: "Mon",
      value: "20°",
      subValue: "18°",
      icon: <HiSun className="text-yellow-400 w-6 h-6" />,
    },
    {
      title: "Tue",
      value: "18°",
      subValue: "16°",
      icon: <HiCloud className="text-gray-400 w-6 h-6" />,
    },
    {
      title: "Wed",
      value: "19°",
      subValue: "17°",
      icon: <FaCloudSunRain className="text-blue-400 w-6 h-6" />,
    },
    {
      title: "Thu",
      value: "21°",
      subValue: "19°",
      icon: <HiSun className="text-yellow-400 w-6 h-6" />,
    },
    {
      title: "Fri",
      value: "17°",
      subValue: "15°",
      icon: <HiCloud className="text-gray-400 w-6 h-6" />,
    },
    {
      title: "Sat",
      value: "22°",
      subValue: "20°",
      icon: <HiSun className="text-yellow-400 w-6 h-6" />,
    },
    {
      title: "Sun",
      value: "16°",
      subValue: "14°",
      icon: <FaCloudSunRain className="text-blue-400 w-6 h-6" />,
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold text-white">Daily forecast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-2 mt-4">
        {detailsData.map((data, index) => (
          <div
            className="rounded-xl bg-button border border-button-border p-4 flex flex-col items-center justify-center"
            key={index}
          >
            <h4 className="text-paragraph font-normal text-sm ">
              {data.title}
            </h4>
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
