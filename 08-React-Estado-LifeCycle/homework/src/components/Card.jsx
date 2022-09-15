import styles from './card.module.css'


export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div className={styles.cardContainer}>

      <button
        className={styles.cardContainer_button}
        onClick={onClose}
      >
        X
      </button>

      <div>
        <h4>{name}</h4>
      </div>
      
      <div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={`imagen de ${img}`}  />
      </div>

      <div>
        <p>Maxima: {max}</p>
      </div>
      
      <div>
        <p>Minima: {min}</p>
      </div>
      
    </div>
  )
};