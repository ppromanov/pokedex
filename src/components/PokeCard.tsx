import React from 'react';
import { IPokemon } from '../interfaces/interfaces';
import { Grid } from '@material-ui/core';

type Card = {
  pokemon: IPokemon;
  chose: (name: string) => void;
};

const PokeCard: React.FC<Card> = ({ pokemon, chose }) => {
  return (
    <Grid
      className={'card ' + pokemon.type}
      onClick={() => {
        chose(pokemon.name);
      }}
    >
      <img className="poke-avatar" src={pokemon.image} alt="blank" />
      <div className="stat">
        <p className="txt">Name</p>
        <p>{pokemon.name}</p>
        <hr />
        <p className="txt">Type</p>
        <p>{pokemon.type}</p>
      </div>
    </Grid>
  );
};

export default PokeCard;
