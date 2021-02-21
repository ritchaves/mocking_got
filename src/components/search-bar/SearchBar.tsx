import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Input } from './styles';
import queryString from 'query-string';
import { useTranslation } from 'react-i18next';

const SearchBar: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const parsed = queryString.parse(location.search, { parseNumbers: true });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    parsed.search = name;
    parsed.page = 1; // we need to reset page, because search might have only 1 page.
    const url = queryString.stringify(parsed);
    history.push(`?${url}`);
  };

  return (
    <Header>
      <Input
        type="search"
        placeholder={t('placeholder_searchbar')}
        onChange={handleChange}
      />
    </Header>
  );
};

export default SearchBar;
