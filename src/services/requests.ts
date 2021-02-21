import axios from 'axios';
import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';

const { get } = axios.create();

export const useFetch = <TData, TError>(
  key: QueryKey,
  url: string,
  options?: UseQueryOptions<TData, TError, TData>,
): UseQueryResult<TData, TError> => {
  return useQuery<TData, TError>(key, () => getRequest(url), options);
};

export const getRequest = async (url: string): Promise<any> => {
  const { data } = await get(url);
  return data;
};
