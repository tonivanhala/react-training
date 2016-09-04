import { SEARCH_TRACK } from '../core/actions';

function searchResultReducer(state=[], action) {
  switch(action.type) {
    case SEARCH_TRACK:
      return [...action.payload.data.results.trackmatches.track];
    break;
  }
  return state;
}

export default searchResultReducer;
