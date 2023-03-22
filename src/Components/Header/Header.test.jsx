import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from '.';

describe('Header component', () => {
  it('displays h1 text as expected', () => {
    render(<Header/>);

    const h1 = screen.getByTestId('h1');
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent('RESTy')
  });

  it('renders header element', () => {
    render(<Header/>);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
  });
});