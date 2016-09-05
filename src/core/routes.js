import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import SearchResultList from '../components/search_result_list';
import RelatedTrackList from '../components/related_track_list';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={SearchResultList} />
    <Route path='/related/:mbid' component={RelatedTrackList} />
  </Route>
);
