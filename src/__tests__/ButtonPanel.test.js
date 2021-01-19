import React from 'react';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonPanel from '../components/ButtonPanel';
import buttons from '../state/state';

const clickHandler = () => { ''; };

test('Check if it renders all buttons', () => {
  const panel = render(<ButtonPanel buttons={buttons} clickHandler={clickHandler} />);
  expect(panel.findAllByRole('button'));
});
