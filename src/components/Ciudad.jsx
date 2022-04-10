import React from "react";
import s from "./styles/Ciudad.module.css";

export default function Ciudad({ city }) {
  return (
    <div className={s.ciudad}>
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.description}</div>
          {/* <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div> */}
          {/* <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div> */}
        </div>
      </div>
    </div>
  );
}
