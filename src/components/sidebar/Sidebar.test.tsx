import React from 'react';
import { createMemoryHistory } from 'history';

import categoriesMock from '../../__mocks__/categories.json';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import Sidebar from '.';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const mock = () => categoriesMock;

jest.mock('../../services/requests.ts', () => {
  return {
    useFetch: () => ({
      data: mock(),
      error: null,
      status: 'success',
    }),
  };
});

describe('Sidebar test', () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router history={history}>
        <Sidebar />
      </Router>,
    );
  });

  it('should render the sidebar bar with all items requested', () => {
    const list = screen.getAllByRole('link');
    expect(list).toBeDefined();
    expect(list).toHaveLength(8);
  });

  it('should render the sidebar bar with all items requested', () => {
    const list = screen.getByText('Channels') as Partial<HTMLAnchorElement>;

    userEvent.click(list as HTMLAnchorElement);

    expect(history.location.pathname).toEqual('/categories/Channels');
  });

  it('should be ordered alphabetically', async () => {
    const list = screen.getAllByRole('link');
    const unOrdered = [
      'Dialer',
      'Voice Analytics',
      'Reporting',
      'Optimization',
      'Channels',
      'Productivity',
      'Management',
    ];

    // sort affects the array, so we can use categoriesMock which has gone through the sorting
    expect(list[1].innerHTML).toEqual(categoriesMock[0]);
    expect(list[2].innerHTML).toEqual(categoriesMock[1]);
    expect(list[3].innerHTML).toEqual(categoriesMock[2]);

    expect(list[1].innerHTML).not.toEqual(unOrdered[0]);
    expect(list[2].innerHTML).not.toEqual(unOrdered[1]);
    expect(list[3].innerHTML).not.toEqual(unOrdered[2]);
  });
});
