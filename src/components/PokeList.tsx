import React from 'react';
import { IPokemon } from '../interfaces/pokemon';
import PokeCard from './PokeCard';

type PokeArr = {
  pokeList: IPokemon[];
  counter: number;
  chose: (name: string) => void;
};

const PokeList: React.FC<PokeArr> = ({ pokeList, counter, chose }) => {
  const pokeArr = pokeList.slice(0, counter);

  return (
    <ul>
      {pokeArr.map((pokemon) => {
        return <PokeCard key={pokemon.id} pokemon={pokemon} chose={chose} />;
      })}
    </ul>
  );
};

export default PokeList;
