import axios from 'axios';

import API_KEY from '../api_key.txt';

export const SEARCH_TRACK = 'SEARCH_TRACK';

export function searchTrack(trackName) {
  const lastFmUrl = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${trackName}&api_key=${API_KEY}&format=json`;
  const request = axios.get(lastFmUrl);

  return {
    type: SEARCH_TRACK,
    payload: request,
  };
}
