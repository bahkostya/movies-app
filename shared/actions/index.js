import { fromJS } from 'immutable';

import api from '../api';

export const IMPORT_MOVIES_REQUEST = 'IMPORT_MOVIES_REQUEST';
export const IMPORT_MOVIES_SUCCESS = 'IMPORT_MOVIES_SUCCESS';

export const FETCH_ALL_MOVIES_REQUEST = 'FETCH_ALL_MOVIES_REQUEST';
export const FETCH_ALL_MOVIES_SUCCESS = 'FETCH_ALL_MOVIES_SUCCESS';

export const importMoviesRequest = () => ({
    type: IMPORT_MOVIES_REQUEST,
});

export const importMoviesSuccess = moviesCount => ({
    type: IMPORT_MOVIES_SUCCESS,
    moviesCount,
});

export const importMovies = movies => dispatch => {
    dispatch(importMoviesRequest());

    return api.addMovies(movies)
        .then(data => dispatch(importMoviesSuccess(data.length)));
};

export const fetchAllMoviesRequest = () => ({
    type: FETCH_ALL_MOVIES_REQUEST,
});

export const fetchAllMoviesSuccess = movies => ({
    type: FETCH_ALL_MOVIES_SUCCESS,
    movies,
});

export const fetchAllMovies = () => dispatch => {
    dispatch(fetchAllMoviesRequest());

    return api.getAllMovies()
        .then(data => dispatch(fetchAllMoviesSuccess(fromJS(data))));
};
