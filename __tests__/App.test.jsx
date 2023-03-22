// import '@testing-library/jest-dom';
// import { fireEvent, render, screen } from '@testing-library/react';

// import App from '../src/App';

// describe('App Component', () => {
//   it('allows form use and renders results as expected', () => {
//     render(<App />);
//     let urlInput = screen.getByTestId('url-input');
//     let button = screen.getByTestId('button');
//     let getSpan = screen.getByTestId('get-span');

//     fireEvent.change(urlInput, {target: {value: 'test.com'}});
//     fireEvent.click(getSpan);
//     fireEvent.click(button);
    
//     let json = screen.getByTestId('json');
//     expect(json).toHaveTextContent('fake thing 1');

//     let methodDiv = screen.getByText('Request Method: POST');
//     let urlDiv = screen.getByText('URL: test.com');
//     expect(methodDiv).toBeInTheDocument();
//     expect(urlDiv).toBeInTheDocument();

//   })
// })

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import axios from 'axios';
import App from './App';

const server = setupServer(
  rest.get('/api/data', (req, res, ctx) => {
    return res(ctx.json({ data: 'mock data' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('axios');

describe('App', () => {
  it('renders correctly', async () => {
    axios.mockResolvedValueOnce({ data: 'mock data' });

    render(<App />);

    expect(screen.getByText('Request Method:')).toBeInTheDocument();
    expect(screen.getByText('URL:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go!' })).toBeInTheDocument();

    userEvent.type(screen.getByLabelText('URL'), '/api/data');
    userEvent.click(screen.getByRole('button', { name: 'Go!' }));

    expect(await screen.findByText('mock data')).toBeInTheDocument();
  });
});

