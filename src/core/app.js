import React from 'react';

import SearchBar from '../components/search_bar';
import SearchHistory from '../components/search_history';
import SearchResultList from '../components/search_result_list';

import API_KEY from '../api_key.txt';

const App = () => (
  <div>
    <SearchBar />
    <SearchHistory />
    <SearchResultList />
  </div>
);

export default App;
