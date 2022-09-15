import './Card.css'


export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div className='card-container'>

      <button
        className='card-container_button'
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