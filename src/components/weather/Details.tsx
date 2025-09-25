import { useWeatherStore } from "@/store/apiStore";
import React from "react";

const Details = () => {
  const { weather, forecast } = useWeatherStore();
  const feels_like =
    weather?.main?.feels_like !== undefined
      ? Math.round(weather.main.feels_like)
      : 0;
  const humidity = weather?.main.humidity;
  const wind =
    weather?.wind?.speed !== undefined
      ? Math.round(weather.wind.speed * 3.6)
      : 0;
  const firstForecast = forecast?.list?.[0];
  const precipitation =
    firstForecast?.rain?.["3h"] ?? firstForecast?.snow?.["3h"] ?? 0;

  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* feels like */}
      <div className="rounded-xl bg-button border border-button-border p-4">
        <h3 className="text-paragraph text-sm font-normal">Feels Like</h3>
        <p className="text-2xl font-normal text-white pt-1">{feels_like}°</p>
      </div>
      {/* feels like */}
      {/* humidity */}
      <div className="rounded-xl bg-button border border-button-border p-4">
        <h3 className="text-paragraph text-sm font-normal">Humidity</h3>
        <p className="text-2xl font-normal text-white pt-1">{humidity}%</p>
      </div>
      {/* humidity */}
      {/* Wind */}
      <div className="rounded-xl bg-button border border-button-border p-4">
        <h3 className="text-paragraph text-sm font-normal">Wind</h3>
        <p className="text-2xl font-normal text-white pt-1">{wind} km/h</p>
      </div>
      {/* Wind */}

      {/* Precipitation */}
      <div className="rounded-xl bg-button border border-button-border p-4">
        <h3 className="text-paragraph text-sm font-normal">Precipitation</h3>
        <p className="text-2xl font-normal text-white pt-1">
          {precipitation} mm
        </p>
      </div>
      {/* Precipitation */}
    </div>
  );
};

export default Details;
