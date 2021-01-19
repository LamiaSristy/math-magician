import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('The Header component should', () => {
  it('contain a navigation link to the resume page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const link = getByText('Home');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
  it('contain a navigation link to the resume page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const link = getByText('Calculator');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/calculator');
  });

  it('contain a navigation link to the resume page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const link = getByText('Quote');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/quotes');
  });
});
