"use client";
import LandingCard from "@/components/landing/LandingCard";
import { useWeatherStore } from "@/store/apiStore";
import Loading from "./loading";

export default function Home() {
  const { loading, error, loadWeather } = useWeatherStore();

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
