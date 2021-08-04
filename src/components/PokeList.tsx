import { Box, Container } from '@material-ui/core';
import React from 'react';
import { IPokemon } from '../interfaces/interfaces';
import PokeCard from './PokeCard';

type PokeArr = {
  pokeList: IPokemon[];
  counter: number;
  chose: (name: string) => void;
};

const PokeList: React.FC<PokeArr> = ({ pokeList, counter, chose }) => {
  const pokeArr = pokeList.slice(0, counter);

  return (
    <Box className="list">
      {pokeArr.map((pokemon) => {
        return <PokeCard key={pokemon.id} pokemon={pokemon} chose={chose} />;
      })}
    </Box>
  );
};

export default PokeList;
