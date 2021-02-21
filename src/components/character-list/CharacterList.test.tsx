import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen } from '@testing-library/react';
import CharacterList from '.';
import charactersMock from '../../__mocks__/characters.json';

const mock = () => charactersMock;

jest.mock('../../services/queries/useCategoriesSearch', () => {
  return () => {
    return { data: { apps: mock() }, error: null, status: 'success' };
  };
});

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any), // use actual for all non-hook parts
  useParams: () => ({
    category: '',
  }),
}));

describe('App List test', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <CharacterList />
      </QueryClientProvider>,
    );
  });

  it('should render apps items and pagination', async () => {
    const list = screen.getAllByTestId('item-list');
    expect(list).toHaveLength(3);

    const pagination = screen.getByText(1);
    expect(pagination).toBeInTheDocument();
  });
});
