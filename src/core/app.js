import React from 'react';
import axios from 'axios';

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

    const lastFmUrl = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${term}&api_key=${API_KEY}&format=json`;
    axios.get(lastFmUrl).then(({data}) => {
      this.setState(Object.assign(
        {},
        this.state,
        {
          trackResults: data.results.trackmatches.track
        }
      ))
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
          results={ this.state.trackResults }
        />
      </div>
    );
  }
}

export default App;
