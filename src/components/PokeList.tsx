import { Box } from '@material-ui/core';
import React from 'react';
import { IPokemon } from '../interfaces/interfaces';
import PokeCard from './PokeCard';

type PokeArr = {
  pokeList: IPokemon[];
  cardsPerPage: number;
  chose: (name: string) => void;
  nameQuery: string;
  typesQuery: string[];
  currentCard: IPokemon[];
};

const PokeList: React.FC<PokeArr> = ({
  pokeList,
  cardsPerPage,
  chose,
  nameQuery,
  typesQuery,
  currentCard,
}) => {
  return (
    <Box className="list">
      {nameQuery
        ? pokeList.map((pokemon) => {
            if (pokemon.name === nameQuery) {
              return (
                <PokeCard key={pokemon.id} pokemon={pokemon} chose={chose} />
              );
            }
          })
        : typesQuery.length !== 0
        ? pokeList.map((pokemon) => {
            if (typesQuery.includes(pokemon.type)) {
              return (
                <PokeCard key={pokemon.id} pokemon={pokemon} chose={chose} />
              );
            }
          })
        : currentCard.map((pokemon) => {
            return (
              <PokeCard key={pokemon.id} pokemon={pokemon} chose={chose} />
            );
          })}
    </Box>
  );
};

export default PokeList;
