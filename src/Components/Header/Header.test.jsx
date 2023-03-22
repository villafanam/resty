import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from '.';

describe('Header component', () => {
  it('displays hi text', () => {
    render(<Header/>);

    const h1 = screen.getByTestId('h1');
    expect(h1).toHaveTextContent('RESTy')
  });
});