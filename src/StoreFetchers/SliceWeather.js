import { createSlice } from "@reduxjs/toolkit";
const initialState=null
const SliceWeather=createSlice(
    {
        initialState
        ,name:'weather'
        ,reducers:{
            updateWeather:(currentState,actions)=>{
                
                currentState=actions.payload;
                return currentState;
            },
            resetWeather:(currentState)=>{

            }
        }
    }
)

export const {updateWeather,resetWeather}=SliceWeather.actions;
export default SliceWeather.reducer ;