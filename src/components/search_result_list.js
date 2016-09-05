import React from 'react';
import { connect } from 'react-redux';

import TrackList from './track_list';

const SearchResultList = ({ results }) => (
  <TrackList tracks={results} />
);

function mapStateToProps( {trackResults} ) {
  return { results: trackResults };
}

export default connect(mapStateToProps)(SearchResultList);
