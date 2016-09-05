import axios from 'axios';

import API_KEY from '../api_key.txt';

export const SEARCH_TRACK = 'SEARCH_TRACK';
export const NEW_SEARCH = 'NEW_SEARCH';
export const FETCH_RELATED = 'FETCH_RELATED';

export function fetchRelatedTracks(mbid) {
  const lastFmUrl = `http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&mbid=${mbid}&api_key=${API_KEY}&format=json`;
  const request = axios.get(lastFmUrl);

  return {
    type: FETCH_RELATED,
    payload: request,
  };
}

export function searchTrack(trackName) {
  return [performSearch(trackName), newSearch(trackName)];
}

export function performSearch(trackName) {
  const lastFmUrl = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${trackName}&api_key=${API_KEY}&format=json`;
  const request = axios.get(lastFmUrl);

  return {
    type: SEARCH_TRACK,
    payload: request,
  };
}

function newSearch(trackName) {
  return {
    type: NEW_SEARCH,
    payload: trackName,
  }
}
