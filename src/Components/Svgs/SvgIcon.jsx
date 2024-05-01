import style from './SvgIcon.module.css'
export default function SvgIcon({iconId,width=200,height=200}) {

    const choseIcon=_=>{
        switch (iconId) {
            case '01d':
                return 'day'
            case '01n':
                return 'night'
            case '02d':
                return 'cloudy-day-1'
            case '03d':
                return 'cloudy-day-2'
            case '04d':
                return 'cloudy-day-3'
            case '02n':
                return 'cloudy-night-1'
            case '03n':
                return 'cloudy-night-2'
            case '04n':
                return 'cloudy-night-3'
            case '09d':
            case '09n':
                return 'rainy-6'
            case '10d':
            case '10n':
                return 'rainy-1'
            case '11d':
            case '11n':
                return 'thunder'
            case '13d':
            case '13n':
                    return 'snowy-6'
            case '50d':
            case '50n':
                return 'cloudy'
            default:
                return 'cloudy-day-1';
        }
    }

  return (
    <div >

           <i   className={style.icon} style={{backgroundImage:`url(https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/${choseIcon()}.svg) `}}></i>

    </div>
  )
}
