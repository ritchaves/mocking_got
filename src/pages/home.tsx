import React from 'react';
import { Route } from 'react-router-dom';
import CharacterList from '../components/character-list';
import SearchBar from '../components/search-bar';
import Sidebar from '../components/sidebar';

const Home: React.FC = () => {
  return (
    <div className="flex-container">
      <Sidebar />
      <section className="apps-list">
        <SearchBar />
        <Route
          exact
          path={[
            `/`,
            `/categories/:category/`,
            `/categories/:category/?page=:page`,
            `/categories/:category?search=:searchName`,
            `/categories/:category?search=:searchName&page=:page`,
            `?search=:searchName`,
            `?search=:searchName&page=:page`,
            `/?page=:page`,
          ]}
        >
          <CharacterList />
        </Route>
      </section>
    </div>
  );
};

export default Home;
