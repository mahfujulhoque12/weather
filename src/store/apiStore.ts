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
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`),
        fetch(`${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`),
      ]);

      if (!weatherRes.ok) throw new Error("Failed to fetch weather");
      if (!forecastRes.ok) throw new Error("Failed to fetch forecast");

      const weatherData = await weatherRes.json();
      const forecastData = await forecastRes.json();

      set({
        weather: weatherData,
        forecast: forecastData,
        loading: false,
      });
    } catch (err: any) {
      toast.error("No City found");
      set({ error: err.message, loading: false });
    }
  },
}));
