import React, { useEffect, useState } from 'react';
import { IPokemon, ICard } from './interfaces/interfaces';
import PokeList from './components/PokeList';
import CounterButtons from './components/CounterButtons';
import PokeInfo from './components/PokeInfo';

const App: React.FC = () => {
  const [pokeBase, setPokeBase] = useState<IPokemon[]>([]);
  const [counter, setCounter] = useState<number>(10);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [chosenPokemon, setChosenPokemon] = useState<ICard>(Object);

  const chosePokemon = async (name: string) => {
    const chose = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
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
    await setChosenPokemon(pokemon);
    await setModalActive(true);
  };

  const selectCounter = (num: number) => {
    setCounter(num);
  };

  const fetchPokeBase = async () => {
    for (let id = 1; id <= 1118; id++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const res = await fetch(url);
      const resPokemon = await res.json();
      const pokemon: IPokemon = {
        id: id,
        name: resPokemon.name,
        type: resPokemon.types[0].type.name,
        image: resPokemon.sprites.front_default,
      };
      setPokeBase((prev) => [...prev, pokemon]);
    }
  };

  useEffect(() => {
    fetchPokeBase();
  }, []);

  return (
    <div className="App">
      <CounterButtons count={selectCounter} />
      <PokeList pokeList={pokeBase} counter={counter} chose={chosePokemon} />
      {modalActive ? (
        <PokeInfo
          active={modalActive}
          setActive={setModalActive}
          pokemon={chosenPokemon}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
