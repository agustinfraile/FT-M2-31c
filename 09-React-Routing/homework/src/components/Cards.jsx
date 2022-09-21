import Card from './Card';
import styles from'./cards.module.css'


export default function Cards({id, cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map

  return (
      <div className={styles.cardsContainer}>
        {
          cities.map(card => 
            <Card 
              id={card.id}
              name={card.name}
              img={card.img}
              max={card.max}
              min={card.min}
              onClose={() => onClose(card.id)}
              key={card.id}
            />
          )
        }     
      </div>
    )
};