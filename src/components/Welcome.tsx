import { Button, Container } from '@material-ui/core';
import React from 'react';

type Start = {
  close: React.Dispatch<React.SetStateAction<boolean>>;
  showCards: React.Dispatch<React.SetStateAction<number>>;
};

const Welcome: React.FC<Start> = ({ close, showCards }) => {
  return (
    <Container className="welcome">
      <h1>Welcome to PokeDex</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          close(false);
          showCards(10);
        }}
      >
        Let's get Started!
      </Button>
    </Container>
  );
};
export default Welcome;
