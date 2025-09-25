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

  // ✅ Forecast only (if you need separate calls)
  loadForecast: async (city) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    set({ loading: true, error: null });

    try {
      const res = await fetch(
        `${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("Failed to fetch forecast");

      const data = await res.json();
      set({ forecast: data, loading: false });
    } catch (err: any) {
      toast.error("Failed to load forecast");
      set({ error: err.message, loading: false });
    }
  },

  // ✅ City autocomplete (Geo API)
  searchCity: async (query) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
      );
      if (!res.ok) throw new Error("Failed to search city");

      const data = await res.json();
      set({ cities: data });
    } catch (err: any) {
      toast.error("Failed to search city");
      set({ error: err.message });
    }
  },
}));
