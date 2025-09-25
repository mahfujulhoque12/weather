# Weather App - Next.js & TypeScript

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and enhanced with TypeScript, Zustand, Sonner, and i18n-iso-countries for building a modern weather application.

---

## Features

- Search weather by city
- Display current weather
- 7-day weather forecast
- Show country names from ISO codes using `i18n-iso-countries`
- Toast notifications for success/error using `Sonner`
- State management with `Zustand`
- Use Global Loader when API call
- Show Autocomlete when search
- Feels like temperature
- Humidity percentage
- Wind speed
- Precipitation
- Daily high/low temperatures
- Weather icons for each day
-  Hourly forecast


### Install Dependencies

```bash
npm install
# or
yarn install

### Environment Variables

Create a `.env.local` file in the root directory and add your OpenWeather API key:

NEXT_PUBLIC_API_KEY=your_openweather_api_key
NEXT_PUBLIC_BASE_URL=https://api.openweathermap.org/data/2.5/
Replace your_openweather_api_key with your actual OpenWeather API key



