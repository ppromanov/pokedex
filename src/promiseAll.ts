import { IPokemon, ICard } from './interfaces/interfaces';

const api = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokeBase = async (pokeBase: IPokemon[]) => {
  for (let id = 1; id <= 898; id++) {
    const res = await fetch(`${api}/${id}`);
    const resPokemon = await res.json();
    const pokemon: IPokemon = {
      id: id,
      name: resPokemon.name,
      type: resPokemon.types[0].type.name,
      image: resPokemon.sprites.front_default,
    };
    await pokeBase.push(pokemon);
  }
  return pokeBase;
};

export const chosePokemon = async (name: string) => {
  const chose = await fetch(`${api}/${name}`);
  const resPokemon = await chose.json();
  const pokemon: ICard = {
    name: resPokemon.name,
    image: resPokemon.sprites.front_default,
    types: resPokemon.types,
    hp: resPokemon.stats[0].base_stat,
    attack: resPokemon.stats[1].base_stat,
    defense: resPokemon.stats[2].base_stat,
    spedialAttack: resPokemon.stats[3].base_stat,
    specialDefende: resPokemon.stats[4].base_stat,
    speed: resPokemon.stats[5].base_stat,
    abilities: resPokemon.abilities,
  };
  return pokemon;
  //   await setModalActive(true);
};
