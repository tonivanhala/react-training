import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRelatedTracks } from '../core/actions';

import TrackList from './track_list';

class RelatedTrackList extends Component {
  componentWillMount() {
    this.props.fetchRelatedTracks(
      this.props.params.mbid
    );
  }
  componentWillReceiveProps(newProps) {
    if(newProps.params.mbid !== this.props.params.mbid) {
      this.props.fetchRelatedTracks(
        this.props.params.mbid
      );
    }
  }
  render() {
    return <TrackList tracks={this.props.related} />;
  }
}

function mapStateToProps( { relatedTracks } ) {
  return { related: relatedTracks };
}

export default connect(mapStateToProps, { fetchRelatedTracks })(RelatedTrackList);
