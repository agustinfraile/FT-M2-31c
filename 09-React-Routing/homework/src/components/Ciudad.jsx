import React from 'react'
import styles from './ciudad.module.css'


export default function Ciudad({ city }) {
  return (
    <div className={styles.cityContainer}>
      
      <h2>{city.name}</h2>
      <div className={styles.cityContainer_info}>
        <div >
          <p className={styles.cityContainer_info_temp}>
            Temperatura: {city.temp} ºC
          </p>
        </div>
        <div>
          <p className={styles.cityContainer_info_weather}>
            Clima: {city.weather}
          </p>
        </div>
        <div>
          <p className={styles.cityContainer_info_wind}>
            Viento: {city.wind} km/h
          </p>
        </div>
        <div>
          <p className={styles.cityContainer_info_clouds}>
            Cantidad de nubes: {city.clouds}
          </p>
        </div>
        <div>
          <p className={styles.cityContainer_info_lat}>
            Latitud: {city.latitud}º
          </p>
        </div>
        <div>
          <p className={styles.cityContainer_info_long}>
            Longitud: {city.longitud}º
          </p>
        </div>
      </div>
      
    </div>
  )
}