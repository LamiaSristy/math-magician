import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';

describe('Home Component', () => {
  test('renders the title text of the Home page', () => {
    const { getByText } = render(<Home />);
    const title = getByText('What is math!');
    expect(title).toBeInTheDocument();
  });

  test('renders the title text of the Home page', () => {
    const { getByText } = render(<Home />);
    const title = getByText('What is math!');
    expect(title).toMatchSnapshot();
  });
});
