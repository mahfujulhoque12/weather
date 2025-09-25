/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import { create } from "zustand";

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: null,
  forecast: null,
  cities: [],
  loading: false,
  error: null,

  loadWeather: async (city) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    set({ loading: true, error: null });

    try {
      const weatherRes = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!weatherRes.ok) throw new Error("City not found");

      const weatherData = await weatherRes.json();
      const { coord } = weatherData;

      const oneCallRes = await fetch(
        `${BASE_URL}/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}&units=metric`
      );

      if (!oneCallRes.ok) throw new Error("Failed to fetch 7-day forecast");

      const forecastData = await oneCallRes.json();

      set({
        weather: weatherData,
        forecast: forecastData,
        loading: false,
      });
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
      set({ error: err.message, loading: false });
    }
  },
}));
