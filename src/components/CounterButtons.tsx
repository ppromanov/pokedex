import { Button } from '@material-ui/core';
import React from 'react';

type Counter = {
  count: (num: number) => void;
};

const CounterButtons: React.FC<Counter> = ({ count }) => {
  return (
    <div className="counters">
      <Button onClick={() => count(10)}>10</Button>
      <Button onClick={() => count(20)}>20</Button>
      <Button onClick={() => count(50)}>50</Button>
    </div>
  );
};

export default CounterButtons;
