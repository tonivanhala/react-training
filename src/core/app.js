import React from 'react';

import SearchBar from '../components/search_bar';
import SearchHistory from '../components/search_history';

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
      </div>
    );
  }
}

export default App;
