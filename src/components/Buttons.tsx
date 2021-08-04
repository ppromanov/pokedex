import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

type Interaction = {
  count: (num: number) => void;
  searchByName: React.Dispatch<React.SetStateAction<string>>;
  searchByTypes: React.Dispatch<React.SetStateAction<string[]>>;
};

const Buttons: React.FC<Interaction> = ({
  count,
  searchByName,
  searchByTypes,
}) => {
  const [name, setName] = useState<string>('');
  const [types, setTypes] = useState<string>('');

  const handleName = (event: any) => {
    event.preventDefault();
    if (name.trim()) {
      searchByTypes([]);
      setTypes('');
      searchByName(name.toLowerCase());
    }
  };
  const handleTypes = (event: any) => {
    event.preventDefault();
    if (types.trim()) {
      searchByName('');
      setName('');
      searchByTypes(types.split(' '));
    }
  };

  return (
    <div className="buttons">
      <div className="searchbar">
        <form onSubmit={handleName}>
          <TextField
            value={name}
            variant="outlined"
            label="Search by name"
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <form onSubmit={handleTypes}>
          <TextField
            value={types}
            variant="outlined"
            label="Search by type"
            onChange={(e) => setTypes(e.target.value)}
          />
        </form>
      </div>
      <Button
        onClick={() => {
          searchByName('');
          searchByTypes([]);
          setName('');
          setTypes('');
        }}
      >
        Reset
      </Button>
      <Button onClick={() => count(10)}>10</Button>
      <Button onClick={() => count(20)}>20</Button>
      <Button onClick={() => count(50)}>50</Button>
    </div>
  );
};

export default Buttons;
