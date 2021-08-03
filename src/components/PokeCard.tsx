import React from 'react';
import { IPokemon } from '../interfaces/pokemon';

type Card = {
  pokemon: IPokemon;
};

const PokeCard: React.FC<Card> = ({ pokemon }) => {
  return (
    <li className={'card ' + pokemon.type}>
      <img className="poke-avatar" src={pokemon.image} alt="blank" />
      <div className="stat">
        <p>name: {pokemon.name}</p>
        <p>type: {pokemon.type}</p>
      </div>
    </li>
  );
};

export default PokeCard;
