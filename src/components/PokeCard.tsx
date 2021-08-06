import React from 'react';
import { IPokemon } from '../interfaces/interfaces';
import { Card, Container, makeStyles, Theme } from '@material-ui/core';

type Card = {
  pokemon: IPokemon;
  chose: (name: string) => void;
};

type ColorProps = {
  cardColor: string;
};

const cardColors: any = {
  grass: '#78c850',
  water: '#6890f0',
  bug: '#a8b820',
  fighting: '#c03028',
  flying: '#a890f0',
  normal: '#a8a878',
  poison: '#a040a0',
  electric: '#f8d030',
  ground: '#b8a038',
  psychic: '#f85888',
  rock: '#b8a038',
  fire: '#f08030',
  ice: '#98d8d8',
  dragon: '#7038f8',
  ghost: '#705898',
  dark: '#705848',
  steel: '#b8b8d0',
  fairy: '#ee99ac',
};

const useStyles = makeStyles<Theme, ColorProps>({
  root: ({ cardColor }) => ({
    backgroundColor: cardColor,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  }),
});

const PokeCard: React.FC<Card> = ({ pokemon, chose }) => {
  const classes = useStyles({ cardColor: cardColors[pokemon.type] });

  return (
    <Card
      className={'card ' + classes.root}
      onClick={() => {
        chose(pokemon.name);
      }}
    >
      <img className="poke-avatar" src={pokemon.image} alt={pokemon.name} />
      <Container className="stat">
        <p className="txt">Name</p>
        <p>{pokemon.name}</p>
        <hr />
        <p className="txt">Type</p>
        <p>{pokemon.type}</p>
      </Container>
    </Card>
  );
};

export default PokeCard;
