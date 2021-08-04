import React from 'react';
import { Modal, Container, Grid } from '@material-ui/core';
import { ICard } from '../interfaces/interfaces';

type PokeInform = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  pokemon: ICard;
};

const PokeInfo: React.FC<PokeInform> = ({ pokemon, active, setActive }) => {
  return (
    <Modal
      className="modal"
      open={active}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      onClose={() => setActive(false)}
    >
      <Grid className="info-card">
        <div className="avatar">
          <img className="info-avatar" src={pokemon.image} alt={pokemon.name} />
          <div className="data">
            <h2 className="name">{pokemon.name}</h2>
            <div className="types">
              {pokemon.types.map((item: any, id) => {
                return (
                  <p className={'single-type ' + item.type.name} key={id}>
                    {item.type.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <Container>
          <Container className="stats">
            <h3>Stats: </h3>
            <p>HP: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
            <p>Special Attack: {pokemon.spedialAttack}</p>
            <p>Special Defense: {pokemon.specialDefende}</p>
            <p>Speed: {pokemon.speed}</p>
          </Container>
          <Container className="abilities">
            <h3>Abilities:</h3>
            {pokemon.abilities.map((item: any, id) => {
              return <p key={id}>{item.ability.name}</p>;
            })}
          </Container>
        </Container>
      </Grid>
    </Modal>
  );
};

export default PokeInfo;
