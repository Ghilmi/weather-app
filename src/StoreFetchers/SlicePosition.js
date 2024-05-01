import { createSlice } from "@reduxjs/toolkit";
const initialState={
    city:null
    ,country:null
}
const SlicePosition=createSlice(
    {
        initialState
        ,name:'position'
        ,reducers:{
            updatePosition:(currentState,actions)=>{
                console.log(actions.payload)
                currentState=actions.payload;
                return currentState;
            }
        }
    }
)

export const {updatePosition}=SlicePosition.actions;
export default SlicePosition.reducer ;