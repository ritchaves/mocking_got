import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ITEMS_PER_PAGE, range } from './utils';
import queryString from 'query-string';
import { PageItem, PageLink, PaginationList } from './styles';

interface Props {
  totalItems: number;
}

const Pagination: React.FC<Props> = ({ totalItems }: Props) => {
  const history = useHistory();
  const values = queryString.parse(location.search, { parseNumbers: true });
  const page = values.page || 1;
  const [displayedPages, setDisplayedPages] = useState<number[] | []>([]);
  const pagesPerItems = Math.ceil(totalItems / ITEMS_PER_PAGE);

  useEffect(() => {
    if (totalItems === 0) {
      setDisplayedPages([]);
      return;
    }
    setDisplayedPages(range(page as number, pagesPerItems));
  }, [page, totalItems]);

  const hasPrevious = page !== 1;
  const hasNext = page !== pagesPerItems && !!totalItems;

  const handleClick = (e: React.MouseEvent<HTMLElement>, page: number) => {
    values.page = page;
    const url = queryString.stringify(values);
    history.push(`?${url}`);
  };

  return (
    <PaginationList>
      <PageItem hasNextOrPrev={hasPrevious}>
        <PageLink
          onClick={(e) => {
            handleClick(e, Number(page) - 1);
          }}
        >
          &lt;
        </PageLink>
      </PageItem>
      {displayedPages.length
        ? (displayedPages as Array<number>).map(
            (displayPage: number, index: number) => (
              <PageItem
                key={index}
                hasNextOrPrev
                isActive={page === displayPage}
              >
                <PageLink
                  onClick={(e) => {
                    handleClick(e, displayPage);
                  }}
                >
                  {displayPage}
                </PageLink>
              </PageItem>
            ),
          )
        : null}
      <PageItem hasNextOrPrev={hasNext}>
        <PageLink
          onClick={(e) => {
            handleClick(e, Number(page) + 1);
          }}
        >
          &gt;
        </PageLink>
      </PageItem>
    </PaginationList>
  );
};

export default Pagination;
