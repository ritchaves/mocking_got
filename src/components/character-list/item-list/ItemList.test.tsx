import React from 'react';

import { render, screen } from '@testing-library/react';
import ItemList from '.';
import appMock from '../../../__mocks__/apps.json';

describe('Item List test', () => {
  it('should render the item', async () => {
    render(<ItemList item={appMock[0]} />);
    const item = screen.getAllByRole('listitem');
    expect(item).toBeDefined();
    expect(item).toHaveLength(1);
  });

  it('should render headings depending on subscriptions', async () => {
    const { rerender } = render(<ItemList item={appMock[0]} />);

    const heading = screen.getAllByRole('heading');
    expect(heading).toBeDefined();
    expect(heading).toHaveLength(3);

    rerender(<ItemList item={appMock[2]} />);
    expect(screen.getAllByRole('heading')).toHaveLength(2);
  });

  it('should render free without sup and price with sup', async () => {
    render(<ItemList item={appMock[0]} />);

    const heading = screen.getAllByRole('heading');
    expect(heading[1]).toHaveTextContent('free');
    expect(heading[1]).not.toContainHTML('sup');
    expect(heading[2]).toHaveTextContent('35');
    expect(heading[2]).toContainHTML('sup');
  });

  it('should have more than one category', async () => {
    render(<ItemList item={appMock[0]} />);

    const tags = screen.getByTestId('tags-categories');
    expect(tags).toHaveTextContent('/');
  });
});
