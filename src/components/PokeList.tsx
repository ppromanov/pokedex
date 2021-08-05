import { Box } from '@material-ui/core';
import React from 'react';
import { IPokemon } from '../interfaces/interfaces';
import PokeCard from './PokeCard';

type PokeArr = {
  pokeList: IPokemon[];
  chose: (name: string) => void;
  nameQuery: string;
  typesQuery: string[];
  currentCard: IPokemon[];
};

const PokeList: React.FC<PokeArr> = ({
  pokeList,
  chose,
  nameQuery,
  typesQuery,
  currentCard,
}) => {
  const getPokeCards = () => {
    if (nameQuery) {
      return pokeList.map((pokemon) => {
        if (pokemon.name === nameQuery) {
          return <PokeCard key={pokemon.id} pokemon={pokemon} chose={chose} />;
        }
      });
    }

    if (typesQuery.length !== 0) {
      return pokeList.map((pokemon) => {
        if (typesQuery.includes(pokemon.type)) {
          return <PokeCard key={pokemon.id} pokemon={pokemon} chose={chose} />;
        }
      });
    }

    return currentCard.map((pokemon) => {
      return <PokeCard key={pokemon.id} pokemon={pokemon} chose={chose} />;
    });
  };

  return <Box className="list">{getPokeCards()}</Box>;
};

export default PokeList;
