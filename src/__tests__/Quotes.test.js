import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Quotes from '../components/Quotes';

describe('Quotes', () => {
  test('renders the quotes component correctly', () => {
    const quote = renderer.create(<Quotes />).toJSON();
    expect(quote).toMatchSnapshot();
  });
});
