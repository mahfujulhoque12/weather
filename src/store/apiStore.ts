/* eslint-disable @typescript-eslint/no-explicit-any */
import { WeatherState } from "@/types/updateTypes";
import { toast } from "sonner";
import { create } from "zustand";

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: null,
  forecast: null,
  cities: [],
  suggestions: [],
  loading: false,
  error: null,

  setSuggestions: (suggestions) => set({ suggestions }),

  fetchSuggestions: async (query: string) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    if (!query) return set({ suggestions: [] });
    try {
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
      );
      const data = await res.json();
      set({ suggestions: data });
    } catch (err) {
      console.error(err);
    }
  },

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

      const forecastRes = await fetch(
        `${BASE_URL}/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}&units=metric`
      );
      if (!forecastRes.ok) throw new Error("Failed to fetch forecast");

      const forecastData = await forecastRes.json();

      set({
        weather: weatherData,
        forecast: forecastData,
        loading: false,
        suggestions: [],
      });
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
      set({ error: err.message, loading: false });
    }
  },
}));
