import React from 'react';

import { render, screen } from '@testing-library/react';
import Pagination from '.';
import userEvent from '@testing-library/user-event';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Pagination test ', () => {
  it('should render pages depending on totalItems', () => {
    const { rerender } = render(<Pagination totalItems={1} />);
    expect(screen.getAllByRole('listitem')).toBeDefined();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);

    rerender(<Pagination totalItems={6} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(4);

    rerender(<Pagination totalItems={10} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
  });

  it('should click on page and history should change', () => {
    render(<Pagination totalItems={6} />);
    const pageTwo = screen.getByText('2');
    userEvent.click(pageTwo);
    expect(mockHistoryPush).toHaveBeenCalledWith('?page=2');
  });

  it('next and previous should not be visible with one item', async () => {
    render(<Pagination totalItems={1} />);

    expect(screen.getByText(/</i)).not.toBeVisible();
    expect(screen.getByText(/>/i)).not.toBeVisible();
  });
});
