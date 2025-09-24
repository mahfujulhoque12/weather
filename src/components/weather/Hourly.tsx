import { WiDaySunny, WiCloud, WiNightClear, WiDayCloudy } from "react-icons/wi";

const Hourly = () => {
  const hourlyData = [
    {
      time: "3 PM",
      temperature: "20°",
      icon: <WiDaySunny className="text-2xl" />,
    },
    {
      time: "4 PM",
      temperature: "20°",
      icon: <WiDaySunny className="text-2xl" />,
    },
    {
      time: "5 PM",
      temperature: "20°",
      icon: <WiDayCloudy className="text-2xl" />,
    },
    {
      time: "6 PM",
      temperature: "19°",
      icon: <WiCloud className="text-2xl" />,
    },
    {
      time: "7 PM",
      temperature: "18°",
      icon: <WiCloud className="text-2xl" />,
    },
    {
      time: "8 PM",
      temperature: "18°",
      icon: <WiNightClear className="text-2xl" />,
    },
    {
      time: "9 PM",
      temperature: "17°",
      icon: <WiNightClear className="text-2xl" />,
    },
    {
      time: "10 PM",
      temperature: "17°",
      icon: <WiNightClear className="text-2xl" />,
    },
  ];

  return (
    <div className="bg-button border border-button-border h-full rounded-2xl p-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white text-base sm:text-lg font-bold">
          Hourly forecast
        </h2>
        <span className="bg-[#374151] w-[120px] border border-[#4B5563] text-white text-sm font-normal py-1 px-3 rounded-lg">
          Tuesday
        </span>
      </div>
      <div className="space-y-2 mt-[28px]">
        {hourlyData.map((hour, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Hourly;
