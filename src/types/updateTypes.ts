interface WeatherData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sys: any;
  dt: number;
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    feels_like: number;
  };
  weather: { main: string; description: string; icon: string }[];
  wind: {
    speed: number;
  };
}

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: { main: string; description: string; icon: string }[];
  wind?: {
    speed: number;
    deg: number;
  };
  rain?: {
    [key: string]: number;
  };
  snow?: {
    [key: string]: number;
  };
}

interface ForecastData {
  list: ForecastItem[];
}

interface CityData {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export interface WeatherState {
  weather: WeatherData | null;
  forecast: ForecastData | null;
  cities: CityData[];
  suggestions: CityData[];
  loading: boolean;
  error: string | null;
  loadWeather: (city: string) => Promise<void>;
  setSuggestions: (suggestions: CityData[]) => void;
  fetchSuggestions: (query: string) => Promise<void>;
}
