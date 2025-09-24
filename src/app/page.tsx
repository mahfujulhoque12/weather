"use client";
import LandingCard from "@/components/landing/LandingCard";

import { useWeatherStore } from "@/store/apiStore";
import { useState, useEffect } from "react";
import Loading from "./loading";

export default function Home() {
  const [city, setCity] = useState("Dhaka");
  const { weather, loading, error, loadWeather } = useWeatherStore();

  useEffect(() => {
    loadWeather(city);
  }, [city, loadWeather]);

  return (
    <div>
      {loading && <Loading />}
      {!loading && (
        <>
          <LandingCard />
          {error && <p className="text-red-500">{error}</p>}
        </>
      )}
    </div>
  );
}
