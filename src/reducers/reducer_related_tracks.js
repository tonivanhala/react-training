import { FETCH_RELATED } from '../core/actions';

function relatedTracksReducer(state=[], action) {
  if (action.type === FETCH_RELATED) {
    return [...action.payload.data.similartracks.track];
  }
  return state;
}

export default relatedTracksReducer;
