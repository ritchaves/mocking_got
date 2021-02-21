import { useQuery, UseQueryResult } from 'react-query';
import { ResponseQ } from '../../components/character-list';

const useCategoriesSearch = (
  category?: string,
  search?: string,
): UseQueryResult<ResponseQ, Error> => {
  return useQuery<ResponseQ, Error>([
    `?categories=${category}&search=${search || ''}`,
  ]);
};

export default useCategoriesSearch;
