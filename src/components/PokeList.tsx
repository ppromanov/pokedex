import React from 'react';
import { IPokemon } from '../interfaces/pokemon';
import PokeCard from './PokeCard';

type PokeArr = {
  pokeList: IPokemon[];
  counter: number;
};

const PokeList: React.FC<PokeArr> = ({ pokeList, counter }) => {
  const pokeArr = pokeList.slice(0, counter);

  return (
    <ul>
      {pokeArr.map((pokemon) => {
        return <PokeCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </ul>
  );
};

export default PokeList;
