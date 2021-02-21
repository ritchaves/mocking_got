export const ITEMS_PER_PAGE = 3;

export const range = (
  currentPage: number,
  maxNumberPages: number,
): Array<number> => {
  const length = ITEMS_PER_PAGE;
  if (maxNumberPages === 1) {
    return [];
  }
  if (maxNumberPages === 2) {
    return [1, 2];
  }

  let page = currentPage;
  // for when currentPage is the same as maxNumberPages
  if (currentPage === maxNumberPages) {
    page = currentPage - 1;
  } // when currentPage is the first
  if (currentPage === 1) {
    page = 2;
  }

  return Array.from({ length }, (_, i) => {
    if (i === 0) {
      return page - 1;
    } else if (i === 1) {
      return page;
    } else {
      return page + 1;
    }
  });
};
