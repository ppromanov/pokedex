import React, { useEffect, useState } from 'react';
import { IPokemon, ICard } from './interfaces/interfaces';
import PokeList from './components/PokeList';
import Buttons from './components/Buttons';
import PokeInfo from './components/PokeInfo';
import Pagination from './components/Pagination';
import { chosePokemon, fetchBase } from './fetchPokemons';
import Welcome from './components/Welcome';

const App: React.FC = () => {
  const [welcome, setWelcome] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [pokeBase, setPokeBase] = useState<IPokemon[]>([]);
  const [cardsPerPage, setCardsPerPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [chosenPokemon, setChosenPokemon] = useState<ICard>({
    name: '',
    image: '',
    types: [],
    hp: 0,
    attack: 0,
    defense: 0,
    spedialAttack: 0,
    specialDefende: 0,
    speed: 0,
    abilities: [],
  });
  const [nameQuery, setNameQuery] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<string[]>([]);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCard = pokeBase.slice(firstCardIndex, lastCardIndex);

  const loadPokemons = async () => {
    await fetchBase(pokeBase);
    await setLoading(false);
    await setPokeBase(pokeBase);
  };
  const loadPokemon = async (name: string) => {
    const poke = await chosePokemon(name);
    await setChosenPokemon(poke);
    await setModalActive(true);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const selectCardsPerPage = (num: number) => {
    setCardsPerPage(num);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  if (welcome) {
    return <Welcome close={setWelcome} showCards={setCardsPerPage} />;
  } else {
    return (
      <div className="App">
        <Buttons
          count={selectCardsPerPage}
          searchByName={setNameQuery}
          searchByTypes={setTypeFilter}
        />
        <PokeList
          typesQuery={typeFilter}
          pokeList={pokeBase}
          currentCard={currentCard}
          chose={loadPokemon}
          nameQuery={nameQuery}
        />
        <Pagination
          loading={loading}
          cardsPerPage={cardsPerPage}
          totalPokemons={pokeBase.length}
          paginate={paginate}
        />
        {modalActive && (
          <PokeInfo
            active={modalActive}
            setActive={setModalActive}
            pokemon={chosenPokemon}
          />
        )}
      </div>
    );
  }
};

export default App;
