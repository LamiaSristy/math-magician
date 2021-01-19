import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/Button';

const clickHandler = () => { ''; };

test('Checking if the button roles are button', () => {
  const { getByRole } = render(<Button name="=" wide={false} color={false} clickHandler={clickHandler} />);
  const eqlBtn = getByRole('button');
  expect(eqlBtn).toBeInTheDocument();
});

test('Checking if it renders the button texts correctly', () => {
  const { getByText } = render(<Button name="=" wide={false} color={false} clickHandler={clickHandler} />);
  const eqlBtn = getByText(/=/i);
  expect(eqlBtn).toBeInTheDocument();
});
