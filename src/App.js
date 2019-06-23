import React, {useState} from 'react';
import './styles.css';
import SearchInput from './SearchInput';
import Pokemon from './Pokemon';

function App() {
  const [pokemons, setPokemons] = useState([]);
  
  function handleSearch(value) {
    let pokemon = {};
  
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then(res => res.json())
      .then((data) => {
        const {id, name, sprites: {front_default}} = data;
        let localPokemons = pokemons;
  
        pokemon = {
          id,
          name,
          img: front_default
        };
  
        localPokemons = [...localPokemons, pokemon];
        setPokemons(localPokemons)
      });
  }
  
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className="App">
        <h1 style={{margin: 0}}>Catch them all!</h1>
        <SearchInput search={handleSearch} />
        <div className="pokemonscontainer">
          {pokemons.length < 1
            ? <p>No pokemon captured yet!</p>
            : pokemons.map(p => <Pokemon {...p} />)
          }
        </div>
        
      </div>
    </div>
  );
}

export default App;
