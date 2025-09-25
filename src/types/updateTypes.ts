interface WeatherData {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    feels_like: number;
  };
  weather: { main: string; description: string; icon: string }[];
}

interface ForecastData {
  list: {
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    weather: { main: string; description: string; icon: string }[];
  }[];
}

interface CityData {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

interface WeatherState {
  weather: WeatherData | null;
  forecast: ForecastData | null;
  cities: CityData[];
  loading: boolean;
  error: string | null;
  loadWeather: (city: string) => Promise<void>;
}
