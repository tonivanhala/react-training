import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const SearchResultList = ({ results }) => (
  <div>
    {
      results.map(
        track => {
          const imageUrl = _.get(
            _.find(track.image, {size: 'large'}),
            '#text',
            ''
          );
          return (
            <div
              className="panel col-md-4"
              key={`${track.name}-${track.artist}-${track.mbid}`}
            >
              <div className="panel-heading">{track.artist}</div>
              <div className="panel-body">
                <img
                  className="img-responsive"
                  src={imageUrl}
                />
              </div>
              <div className="panel-footer">{track.name}</div>
            </div>
          );
        }
      )
    }
  </div>
);

function mapStateToProps( {trackResults} ) {
  return { results: trackResults };
}

export default connect(mapStateToProps)(SearchResultList);
