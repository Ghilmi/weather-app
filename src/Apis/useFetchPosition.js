import axios from "axios";

export const useFetchPosition=axios.create({
    baseURL:import.meta.env.VITE_API_GEO_URL
})