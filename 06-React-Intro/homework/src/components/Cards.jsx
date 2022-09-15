import Card from './Card';
import './Cards.css'


export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map

  return (
      <div className='cards-container'>
        {
          cities.map(card => 
            <Card 
              name={card.name}
              img={card.weather[0].icon}
              max={card.main.temp_max}
              min={card.main.temp_min}
              onClose={() => alert(card.name)}
              key={card.id}
            />
          )
        }     
      </div>
    )
};