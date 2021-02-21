import React from 'react';
import { useParams } from 'react-router-dom';
import Pagination from '../pagination';
import ItemList from './item-list';
import { ParamTypes } from '../../models/ParamTypes';
import queryString from 'query-string';
// import { orderByPrice } from './utils';
import useCategoriesSearch from '../../services/queries/useCategoriesSearch';
import { useTranslation } from 'react-i18next';
import { Characters } from '../../models/Characters';

export interface ResponseQ {
  gotCharacters: Characters[];
}

const LIMIT_SIZE = 3;

const CharacterList: React.FC = () => {
  const { t } = useTranslation();
  const { category = '' } = useParams<ParamTypes>();
  const values = queryString.parse(location.search, { parseNumbers: true });
  const pageNumber = values.page || 1;
  const start = ((pageNumber as number) - 1) * LIMIT_SIZE;
  const end = start + LIMIT_SIZE;

  const { status, data, error } = useCategoriesSearch(
    category,
    values.search as string,
  );

  // since react query refetches data to keep it updated with the server,
  // wrapping this with useMemo will avoid recalculation if data hasnt changed
  const transformedData = React.useMemo(() => {
    if (data) {
      return data.gotCharacters.slice(start, end);
    }
  }, [data, start]);

  if (status === 'loading') return <p>{t('loading')}</p>;
  if (status === 'error' && error)
    return <p>{`t('error') : ${error.message}`}</p>;

  return transformedData ? (
    <>
      <ul>
        {transformedData?.map((item, index) => (
          <ItemList key={`${index}-app-item`} item={item} />
        ))}
      </ul>
      <Pagination totalItems={data!.gotCharacters.length} />
    </>
  ) : null;
};

export default CharacterList;
