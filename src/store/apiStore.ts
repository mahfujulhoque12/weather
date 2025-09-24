import { toast } from "sonner";
import { create } from "zustand";

interface WeatherState {
  weather: any | null;
  loading: boolean;
  error: string | null;
  loadWeather: (city: string) => Promise<void>;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: null,
  loading: false,
  error: null,
  loadWeather: async (city) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    set({ loading: true, error: null });

    try {
      const res = await fetch(
        `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("Failed to fetch weather");
      const data = await res.json();
      set({ weather: data, loading: false });
    } catch (err: any) {
      toast.error("Faild to load api");
      set({ error: err.message, loading: false });
    }
  },
}));
