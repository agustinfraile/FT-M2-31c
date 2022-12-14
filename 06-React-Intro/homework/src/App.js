import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
    </div>
  );
}

export default App;
