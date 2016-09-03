import React from 'react';

export default ({ history }) => (
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
