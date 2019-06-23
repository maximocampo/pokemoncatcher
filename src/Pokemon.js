import React from 'react';
import './styles.css'

const Pokemon = ({id, img, name}) => {
  return (
    <div className="pokemoncard">
      <img src={img} alt="img"/>
      <div>
        <p>{id}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Pokemon;