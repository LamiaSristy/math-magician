/* eslint-disable max-len */
import React from 'react';
import quotesStyles from '../styles/quotes.module.css';

function Quotes() {
  return (
    <div className={quotesStyles['quote-container']}>
      <p className={quotesStyles.quote}>
        Mathematics is the queen of science, and arithmetic the queen of mathematics.
        <small>  –Carl Friedrich Gauss.</small>
      </p>
    </div>
  );
}

export default Quotes;
