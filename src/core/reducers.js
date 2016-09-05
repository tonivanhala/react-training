import { combineReducers } from 'redux';

import searchResultReducer from '../reducers/reducer_search_result';
import searchHistoryReducer from '../reducers/reducer_search_history';
import relatedTracksReducer from '../reducers/reducer_related_tracks';

const rootReducer = combineReducers({
  trackResults: searchResultReducer,
  history: searchHistoryReducer,
  relatedTracks: relatedTracksReducer,
});

export default rootReducer;
