import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Form from '.';

describe('Form component', () => {
  it('grabs url and method input as expected', () => {
    render(<Form/>);

    const input = screen.getByTestId('input');
    fireEvent.change(input, {target: {value: 'Tester.com'}});
    //expect(input).toHaveTextContent('Tester.com');
  });
});