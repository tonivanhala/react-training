import React from 'react';
import _ from 'lodash';

const TrackList = ({ tracks }, context) => (
  <div>
    {
      tracks.map(
        track => {
          const imageUrl = _.get(
            _.find(track.image, {size: 'large'}),
            '#text',
            ''
          );
          const artistName = (typeof track.artist === 'object') ? 
            track.artist.name : track.artist;
          return (
            <div
              className="panel col-md-4"
              key={`${track.name}-${artistName}-${track.mbid}`}
              onClick={() => context.router.push(`/related/${track.mbid}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="panel-heading">{artistName}</div>
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

TrackList.contextTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }),
};

export default TrackList;
