import React from 'react';

import SearchBar from '../components/search_bar';
import SearchHistory from '../components/search_history';

import API_KEY from '../api_key.txt';

const App = (props) => (
  <div>
    <SearchBar />
    <SearchHistory />
    {props.children}
  </div>
);

export default App;
