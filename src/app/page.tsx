"use client";
import { useWeatherStore } from "@/store/apiStore";
import Loading from "./loading";
import WeatherCard from "@/components/weather/WeatherCard";

export default function Home() {
  const { loading, error } = useWeatherStore();

  return (
    <div>
      {loading && <Loading />}
      {!loading && (
        <>
          <WeatherCard />
          {error && <p className="text-red-500">{error}</p>}
        </>
      )}
    </div>
  );
}
