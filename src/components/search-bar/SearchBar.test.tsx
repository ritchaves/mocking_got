import React from 'react';

import { render, screen } from '@testing-library/react';
import SearchBar from '.';
import userEvent from '@testing-library/user-event';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('SearchBar test', () => {
  it('should render the search bar', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('placeholder_searchbar');
    expect(input).toBeDefined();
  });

  it('should render input value', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(
      'placeholder_searchbar',
    ) as HTMLInputElement;

    userEvent.type(input, 'agent');
    expect(input.value).toBe('agent');
  });

  it('should render input value and history should be changed', async () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText(
      'placeholder_searchbar',
    ) as HTMLInputElement;

    userEvent.type(input, 'a');
    expect(input.value).toBe('a');
    expect(mockHistoryPush).toHaveBeenCalledWith('?page=1&search=a');
  });
});
