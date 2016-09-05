import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchTrack } from '../core/actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  onInputChange(value) {
    this.setState({ searchTerm: value });
  }

  onSubmit(evt) {
    evt.preventDefault();
    this.props.searchTrack(this.state.searchTerm);
    this.setState( { searchTerm: '' });
  }

  render() {
    return (
      <form
        role="form"
        onSubmit={ evt => this.onSubmit(evt) }
      >
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

export default connect(null, { searchTrack })(SearchBar);
