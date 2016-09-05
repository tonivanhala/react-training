import React from 'react';
import { connect } from 'react-redux';

 const SearchHistory = ({ history }) => (
  <ul
    className="list-inline"
  >
    {
      history.map(
        (item, i) => (
          <li
            key={`${item}-${i}`}
          >{item}</li>
        )
      )
    }
  </ul>
);

function mapStateToProps({ history }) {
  return { history };
}

export default connect(mapStateToProps)(SearchHistory);
