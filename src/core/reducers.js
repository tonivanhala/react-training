import { combineReducers } from 'redux';

import searchResultReducer from '../reducers/reducer_search_result';

const rootReducer = combineReducers({
  trackResults: searchResultReducer,
});

export default rootReducer;
