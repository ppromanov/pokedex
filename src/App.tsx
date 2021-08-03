import React, { useEffect, useState } from 'react';
import { IPokemon } from './interfaces/pokemon';
import PokeList from './components/PokeList';
import CounterButtons from './components/CounterButtons';

const App: React.FC = () => {
  const [pokeBase, setPokeBase] = useState<IPokemon[]>([]);
  const [counter, setCounter] = useState<number>(10);

  const selectCounter = (num: number) => {
    setCounter(num);
  };

  const fetchPokeBase = async () => {
    for (let id = 1; id <= 50; id++) {
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
      <PokeList pokeList={pokeBase} counter={counter} />
    </div>
  );
};

export default App;
