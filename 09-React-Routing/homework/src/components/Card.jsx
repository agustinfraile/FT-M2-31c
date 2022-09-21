import { Link } from 'react-router-dom';

import styles from './card.module.css'


export default function Card({max, min, name, img, onClose, id}) {
  // acá va tu código
  return (
    <div className={styles.cardContainer}>

      <button
        className={styles.cardContainer_button}
        onClick={onClose}
      >
        X
      </button>

      <Link to={`/ciudad/${id}`} >
        <h4>{name}</h4>
      </Link>
      
      <div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={`imagen de ${img}`}  />
      </div>

      <div>
        <p>Máxima: {max}ºC</p>
      </div>
      
      <div>
        <p>Mínima: {min}ºC</p>
      </div>
      
    </div>
  )
};