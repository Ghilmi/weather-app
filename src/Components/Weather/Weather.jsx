import SvgIcon from '../Svgs/SvgIcon';
import Position from '../Svgs/Position';
import Sunryse from '../Svgs/Sunryse';
import Temp from '../Svgs/Temp';
import Time from '../Svgs/Time';
import Wind from '../Svgs/Wind';
import Humidity from '../Svgs/Humidity';
import SpeedoMeter from '../Svgs/SpeedoMeter'
import style from './Weather.module.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Weather() {

    

    //define selectore of weather
    const weather =useSelector(state=>state?.weather);
    //define selectore of position
    const position =useSelector(state=>state?.position);
    useEffect(
        _=>
        {
            console.log(position);
        },[position]
    )
  const CITY_NAME= (weather?.name) ? (weather?.name) : position.city;
  const COUNTRY_NAME=(weather?.sys?.country) ? (weather?.sys?.country) : position.country;
  const getTEMP=(tempValue)=>tempValue?.toFixed(0) - 273;
  const TEMP_NORMAL=getTEMP(weather?.main?.temp);
  const TEMP_MAX=getTEMP(weather?.main?.temp_max);
  const TEMP_MIN=getTEMP(weather?.main?.temp_min);
  const WIND=weather?.wind?.speed;
  const SUNRISE=weather?.sys?.sunrise;
  const SPEEDOMETRE=weather?.main?.pressure;
  const HUMIDITY=weather?.main?.humidity
  const ICON=weather?.weather[0]?.icon

  const formatTime=(value,format=2)=>{
    return `${format===1?value.toDateString() +' ,':''}${value.toString().split(' ')[4].split(':').slice(0,2).join(":")}`;
  }


  return  (
    <div className={`container ${style.box}`}>

            {weather ? <>
                <div className={style.box_p_icon} >
                <h2 className={style.city_name}>{CITY_NAME} ,{COUNTRY_NAME}</h2>
                <Position width='35px' className={style}/>
            </div>
            <div className={style.box_p_icon}>
                <p className={style.time}>
                    {formatTime(new Date(),1)}
                </p>
                <Time width='25px' className={style} fill="#ffc107"/>
            </div>

            

            <div className={style.box_p_icon}>
                <h1>{TEMP_NORMAL} °C </h1>
                <Temp height='60px' className={style} />
            </div>
            
            <p className={style.para_welcom}>Good Morning {CITY_NAME} </p>

            <>
            <SvgIcon iconId={ICON} />
            </>

            <div className={style.box_details}>
                <div className={style.item}>
                    <Sunryse width='50px'/>
                    <h4 className={style.titel}>Sunrise</h4>
                    <p className={style.data}>{formatTime(new Date(SUNRISE*1000))}</p>
                </div>
                <div className={style.item}>
                    <Wind width='60px' height='60px' />
                    <h4 className={style.titel}>Wind</h4>
                    <p className={style.data}>{WIND}m/s</p>
                </div>
                <div className={style.item}>
                    <SpeedoMeter width='60px' height='60px' />
                    <h4 className={style.titel}>Speedometre</h4>
                    <p className={style.data}>{SPEEDOMETRE} Pa</p>
                </div>
                <div className={style.item}>
                    <Humidity width='60px' height='60px' />
                    <h4 className={style.titel}>Humidity</h4>
                    <p className={style.data}>{HUMIDITY}%</p>
                </div>
                <div className={style.item}>
                    <Temp width='60px' height='60px' />
                    <h4 className={style.titel}>Tem Max</h4>
                    <p className={style.data}>{TEMP_MAX}°C</p>
                </div>
                <div className={style.item}>
                    <Temp width='60px' height='60px' />
                    <h4 className={style.titel}>Tem Min</h4>
                    <p className={style.data}>{TEMP_MIN}°C</p>
                </div>
            </div>
            </>
            :
            <h2>Please Choose Your City!</h2>
            }
            
    </div>
  )
  
}
