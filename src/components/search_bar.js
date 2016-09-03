import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  onInputChange(value) {
    this.setState({ searchTerm: value });
  }

  render() {
    return (
      <form role="form">
        <div className="form-group">
          <input
            className="form-control"
            onChange={ ( {target} ) => this.onInputChange(target.value) }
            value={ this.state.searchTerm }
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
