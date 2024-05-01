import { Autocomplete, TextField } from '@mui/material'
import style from './SearchBare.module.css'
import React, {  useState } from 'react'
import { useFetchPosition } from '../../Apis/useFetchPosition';
import { useFetchWeather } from '../../Apis/useFetchWeather';
import { useDispatch  } from 'react-redux';
import { updateWeather } from '../../StoreFetchers/SliceWeather';
import { updatePosition } from '../../StoreFetchers/SlicePosition';
import Position from '../Svgs/Position'
export default function SearchBare() {


  //create state to set result api from geo
  const [georesult,setGeoresult]=useState([])

  //define oure dispatch hoc 

  const dispatch =useDispatch();

  

  //fetch api :position
    
    const getdata=async  (CITY)=> {
      
      try {
         await useFetchPosition.get(
          `\autocomplete`
          ,
          {
            params:{
              units:'metric',
              text:CITY,
              type:'city',
              format:'json',
              apiKey:import.meta.env.VITE_API_GEO_KEY,
              
            }
          }
          )
        .then(resultApi=>{

          setGeoresult( resultApi.data.results);
        });

      } catch (error) {
        console.error(error);
        console.log("from first api");

      }
    };



    //handel cahnge fore get lat and lon for fetch api weather
    const handelChangeCity=async  (geoRespons)=> {
      if(!geoRespons) return 0;
      try {
        geoRespons && await useFetchWeather.get(
          `/weather`
        ,{
        params: {
          lat:geoRespons?.lat,
          lon:geoRespons?.lon,
          appid:import.meta.env.VITE_API_WEATHER_KEY
        }
        
    }
        )
        .then(resultApi=>{
          // console.log(resultApi.data)
          dispatch( updateWeather(resultApi.data));
        });

      } catch (error) {
        console.error(error);
      }
    };


    const handelGetWeatherOnMP= _=>{
      if(navigator.geolocation){
        
        
      navigator.geolocation.getCurrentPosition(
        async  (postion) =>{
          const lon=postion.coords.longitude;
          const lat=postion.coords.latitude;
          handelChangeCity({lon,lat});
          try{
            await useFetchPosition.get('/reverse',
            {
              params:{
                lat,
                lon,
                type:'postcode',
                format:'json',
                apiKey:import.meta.env.VITE_API_GEO_KEY
              }
            })
            .then(
              result=>{
                console.log(result?.data?.results[0])
                const {city='',country=''}=result?.data?.results[0];
                dispatch(updatePosition({city,country} ))
              }
            )
            }catch(error){
              console.error(error);
            }
        },
        (error)=>{
          console.log(error);
        }
      )
        
      }else{
        console.error('navigator not suport geolocion')
      }
    }

  return (  
    <div className={`container ${style.box}`}>
        <Autocomplete
        options={georesult}
        isOptionEqualToValue={(option,value)=>option?.formatted===value?.formatted}
        clearOnBlur={false}
        onChange={(event,value)=>{handelChangeCity(value)}}
        getOptionLabel={(options)=> options?.formatted}
        className={style.search_bare}
        renderInput={(params) => <TextField {...params} label="Search On Youre City" onChange={(event)=>{getdata(event.currentTarget.value)}} />}
        />
        <button onClick={handelGetWeatherOnMP} className={`btn btn-primary ${style.button_bare} `}><Position height={40} fill="#fff"  /></button>
    </div>
  )
}