import { combineReducers } from 'redux';

import searchResultReducer from '../reducers/reducer_search_result';
import searchHistoryReducer from '../reducers/reducer_search_history';

const rootReducer = combineReducers({
  trackResults: searchResultReducer,
  history: searchHistoryReducer,
});

export default rootReducer;
