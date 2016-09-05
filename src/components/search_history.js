import React from 'react';
import { connect } from 'react-redux';

import { performSearch } from '../core/actions';

 const SearchHistory = ({ history, performSearch }) => (
  <ul
    className="list-inline"
  >
    {
      history.map(
        (item, i) => (
          <li
            key={`${item}-${i}`}
            onClick={() => performSearch(item)}
            style={{ cursor: 'pointer' }}
          >{item}</li>
        )
      )
    }
  </ul>
);

function mapStateToProps({ history }) {
  return { history };
}

export default connect(mapStateToProps, { performSearch })(SearchHistory);
