import { NEW_SEARCH } from '../core/actions';

function searchHistoryReducer(state=[], action) {
  if (action.type === NEW_SEARCH) {
    return [action.payload, ...state];
  }
  return state;
}

export default searchHistoryReducer;
