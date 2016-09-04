import React from 'react';

import SearchBar from '../components/search_bar';
import SearchHistory from '../components/search_history';
import SearchResultList from '../components/search_result_list';

import API_KEY from '../api_key.txt';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trackResults: [],
      searchHistory: [],
    };
  }

  onSearch(term) {
    const history = [term, ...this.state.searchHistory];
    this.setState({
      trackResults: [],
      searchHistory: history,
    });

  }

  render() { 
    return (
      <div>
        <SearchBar
          onSearch={ searchTerm => this.onSearch(searchTerm) }
        />
        <SearchHistory
          history={ this.state.searchHistory }
        />
        <SearchResultList
        />
      </div>
    );
  }
}

export default App;
