import React from 'react';

import { cleanup, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Home from './home';
import { QueryClient, QueryClientProvider } from 'react-query';

describe('Sidebar', () => {
  const queryClient = new QueryClient();
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router history={history}>
          <Home />
        </Router>
      </QueryClientProvider>,
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should not show Character List if does not match', () => {
    const route = '/nono';
    history.push(route);

    expect(history.location.pathname).toEqual('/nono');
    const loading = screen.getAllByText('loading');

    // only loads sidebar categories, not AppList
    expect(loading).toBeDefined();
    expect(loading).toHaveLength(1);
  });

  it('should show Character List according to route', () => {
    const route = '/';
    history.replace(route);

    expect(history.location.pathname).toEqual('/');
    expect(screen.getAllByText('loading')).toBeDefined();
    expect(screen.getAllByText('loading')).toHaveLength(2);

    history.replace('?page=1');
    expect(screen.getAllByText('loading')).toBeDefined();
    expect(screen.getAllByText('loading')).toHaveLength(2);
  });
});
