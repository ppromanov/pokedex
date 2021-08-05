import React, { useEffect, useState } from 'react';
import { IPokemon, ICard } from './interfaces/interfaces';
import PokeList from './components/PokeList';
import Buttons from './components/Buttons';
import PokeInfo from './components/PokeInfo';
import Pagination from './components/Pagination';
import { fetchPokeBase, chosePokemon } from './promiseAll';
import Welcome from './components/Welcome';

const App: React.FC = () => {
  const [welcome, setWelcome] = useState<Boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [pokeBase, setPokeBase] = useState<IPokemon[]>([]);
  const [cardsPerPage, setCardsPerPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [chosenPokemon, setChosenPokemon] = useState<ICard>(Object);
  const [nameQuery, setNameQuery] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<string[]>([]);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCard = pokeBase.slice(firstCardIndex, lastCardIndex);

  const loadPokemons = async (apiBase: IPokemon[]) => {
    await fetchPokeBase(apiBase);
    await setLoading(false);
    await setPokeBase(apiBase);
  };
  const loadPokemon = async (name: string) => {
    const poke = await chosePokemon(name);
    await setChosenPokemon(poke);
    await setModalActive(true);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const selectcardsPerPage = (num: number) => {
    setCardsPerPage(num);
  };

  useEffect(() => {
    loadPokemons(pokeBase);
  }, []);

  if (welcome) {
    return <Welcome close={setWelcome} showCards={setCardsPerPage} />;
  } else {
    return (
      <div className="App">
        <Buttons
          count={selectcardsPerPage}
          searchByName={setNameQuery}
          searchByTypes={setTypeFilter}
        />
        <PokeList
          typesQuery={typeFilter}
          pokeList={pokeBase}
          currentCard={currentCard}
          cardsPerPage={cardsPerPage}
          chose={loadPokemon}
          nameQuery={nameQuery}
        />
        <Pagination
          loading={loading}
          cardsPerPage={cardsPerPage}
          totalPokemons={pokeBase.length}
          paginate={paginate}
        />
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
  }
};

export default App;
