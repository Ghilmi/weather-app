import { configureStore } from "@reduxjs/toolkit";
import SliceWeather from "./SliceWeather";
import SlicePosition from './SlicePosition';
export const store=configureStore({
    reducer:{
        weather:SliceWeather
        ,position:SlicePosition
    }

})