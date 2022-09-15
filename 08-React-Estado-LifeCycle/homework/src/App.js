import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';
import NavBar from './components/NavBar.jsx';
import './App.css';
import { useState } from 'react';

function App() {

  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione

    const ciudadEjemplo = {
      min: 32,
      max: 35,
      img: "03n",
      id: 2172797,
      wind: 3.6,
      temp: 300.15,
      name: "Cairns",
      weather: "Clouds",
      clouds: 40,
      latitud: -16.92,
      longitud: 145.77
    };

    setCities(oldCities => [...oldCities, ciudadEjemplo]);
  }

  return (
    <div className="App">
      <div>
        <NavBar onSearch={onSearch}/>
      </div>
      <div>
        <Cards
          cities={cities}
        />
      </div>
      <hr />
    </div>
  );
}

export default App;