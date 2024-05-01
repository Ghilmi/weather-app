import axios from "axios";

export const useFetchWeather=axios.create({
    baseURL:import.meta.env.VITE_API_WEATHER_URL
})