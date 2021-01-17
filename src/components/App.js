/* eslint-disable no-unused-vars */
import '../App.css';
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import buttons from '../state/state';
import styles from './styles.module.css';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = buttonName => {
    const result = calculate({ total, next, operation }, buttonName);

    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <div className={styles.app}>
      <Display total={total} next={next} operation={operation} />
      <ButtonPanel buttons={buttons} clickHandler={handleClick} />
    </div>
  );
};

export default App;
