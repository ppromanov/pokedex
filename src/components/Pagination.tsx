import { Button, Grid } from '@material-ui/core';
import React from 'react';
import spinner from '../img/spinner.gif';

type Page = {
  loading: boolean;
  totalPokemons: number;
  cardsPerPage: number;
  paginate: (number: number) => void;
};

const Pagination: React.FC<Page> = ({
  loading,
  totalPokemons,
  cardsPerPage,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPokemons / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return loading ? (
    <img src={spinner} alt="loading" style={{ width: '50px' }} />
  ) : (
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
