import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useFetch } from '../../services/requests';
import { HeaderNav, List, ListItem, NavSidebar } from './styles';

function useCategories() {
  return useFetch<string[], Error>('categories', `/categories`);
}

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const { data, status, error } = useCategories();
  const alphabeticCategories = data?.sort((a, b) => a.localeCompare(b));

  if (status === 'loading') return <p>{t('loading')}</p>;
  if (status === 'error' && error)
    return <p>{`t('error') : ${error.message}`}</p>;

  return alphabeticCategories ? (
    <NavSidebar>
      <HeaderNav>
        <NavLink to={`/`}>{t('Cultures')}</NavLink>
      </HeaderNav>
      <List>
        {alphabeticCategories.map((category: string, index: number) => (
          <ListItem key={index}>
            <NavLink
              activeClassName="activeLink"
              to={`/categories/${category}`}
            >
              {category}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </NavSidebar>
  ) : null;
};

export default Sidebar;
