import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/Card.module.css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { delCity } from "../redux/actions";
//#region icon imports
import thunderstorm from "../assets/icons/animated/thunder.svg";
import drizzle from "../assets/icons/animated/drizzle.svg";
import rainy_day from "../assets/icons/animated/rainy_day.svg";
import rainy_night from "../assets/icons/animated/rainy_day.svg";
import snow_day from "../assets/icons/animated/snow_day.svg";
import snow from "../assets/icons/animated/snow.svg";
import clear_day from "../assets/icons/animated/day.svg";
import clear_night from "../assets/icons/animated/night.svg";
import cloudy_day from "../assets/icons/animated/cloudy_day.svg";
import cloudy_night from "../assets/icons/animated/cloudy_night.svg";
import weather from "../assets/icons/animated/weather.svg";
//#endregion

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Card({
  // properties
  city: {
    weather: [{ main, description, icon }],
    main: { temp, temp_min, temp_max, pressure, humidity },
    dt,
    sys: { country, sunrise, sunset },
    timezone,
    id,
    name,
  },
  index,
}) {
  const dispatch = useDispatch();
  // background image conditions
  let bg_image;
  switch (true) {
    case dt <= sunrise:
      bg_image = `${style.background_night}`;
      break;
    case dt >= sunset:
      bg_image = `${style.background_evening}`;
      break;
    default:
      bg_image = `${style.background_day}`;
  }

  // weather icon conditions
  let weather_icon;
  switch (main) {
    case "Thunderstorm":
      weather_icon = thunderstorm;
      break;
    case "Drizzle":
      weather_icon = drizzle;
    case "Rain":
      if (dt > sunrise && dt < sunset) {
        weather_icon = rainy_day;
      } else {
        weather_icon = rainy_night;
      }
      break;
    case "Snow":
      if (dt > sunrise && dt < sunset) {
        weather_icon = snow_day;
      } else {
        weather_icon = snow;
      }
      break;
    case "Clear":
      if (dt > sunrise && dt < sunset) {
        weather_icon = clear_day;
      } else {
        weather_icon = clear_night;
      }
      break;
    case "Clouds":
      if (dt > sunrise && dt < sunset) {
        weather_icon = cloudy_day;
      } else {
        weather_icon = cloudy_night;
      }
      break;
    default:
      weather_icon = weather;
  }

  // temp formating
  temp = Math.round(temp);
  temp_min = Math.round(temp_min);
  temp_max = Math.round(temp_max);

  // capitalize description
  function capitalizeWords(string) {
    return string.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }

  description = capitalizeWords(description);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      layoutId={id}
      // transition={{ delay: (index + 1) * 0.2 }}
    >
      <div className={`${style.card} ${bg_image}`}>
        <div>
          <button onClick={() => dispatch(delCity(id))} className={style.btn}>
            X
          </button>
          <div className={style.flex_evenly}>
            <div className={style.top_left_box}>
              <h4 className={style.temp}>{temp}°C</h4>
              <Link to={`/ciudad/${id}`}>
                <p>{country}</p>
                <h5>{name}</h5>
              </Link>
            </div>
            <div className={style.top_right_box}>
              <img
                src={weather_icon}
                width="80"
                height="80"
                alt="weather icon"
              />
              <h5>{description}</h5>
            </div>
          </div>
        </div>
        <div className={`${style.flex_evenly} ${style.line}`}>
          <div className={style.bottom_box}>
            <p>Min</p>
            <p>{temp_min}°C</p>
          </div>
          <div className={style.bottom_box}>
            <p>Max</p>
            <p>{temp_max}°C</p>
          </div>
          <div className={style.bottom_box}>
            <p>Humidity</p>
            <p>{humidity} %</p>
          </div>
          <div className={style.bottom_box}>
            <p>Pressure</p>
            <p>{pressure} hPa</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
