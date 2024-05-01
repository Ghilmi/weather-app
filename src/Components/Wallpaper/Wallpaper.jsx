import srcWallpaper from "../../img/wallpaper.jpg";
import style from "./Wallpaper.module.css";

export default function Wallpaper() {
  return (
    <div>
        <img className={style.wallpaper} src={srcWallpaper} alt="wallpaper" loading={'lazy'}  />
    </div>
  )
}
