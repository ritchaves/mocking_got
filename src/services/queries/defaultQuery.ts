import { QueryFunctionContext } from 'react-query';
import { getRequest } from '../requests';

const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
  return getRequest(`/characters${queryKey[0]}`);
};

export default defaultQueryFn;
