import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { IPokemon } from '../interfaces/interfaces';

type Page = {
  totalPokemons: number;
  cardsPerPage: number;
  paginate: (number: number) => void;
};

const Pagination: React.FC<Page> = ({
  totalPokemons,
  cardsPerPage,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPokemons / cardsPerPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <Grid>
      {pageNumbers.map((number) => {
        return (
          <Button key={number} onClick={() => paginate(number)}>
            {number}
          </Button>
        );
      })}
    </Grid>
  );
};
export default Pagination;
