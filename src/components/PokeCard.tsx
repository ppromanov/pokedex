import React from 'react';
import { IPokemon } from '../interfaces/pokemon';

type Card = {
  pokemon: IPokemon;
  chose: (name: string) => void;
};

const PokeCard: React.FC<Card> = ({ pokemon, chose }) => {
  return (
    <li className={'card ' + pokemon.type} onClick={() => chose(pokemon.name)}>
      <img className="poke-avatar" src={pokemon.image} alt="blank" />
      <div className="stat">
        <p>name: {pokemon.name}</p>
        <hr />
        <p>type: {pokemon.type}</p>
      </div>
    </li>
  );
};

export default PokeCard;
