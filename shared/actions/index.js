import { fromJS } from 'immutable';

import api from '../api';

export const IMPORT_MOVIES_REQUEST = 'IMPORT_MOVIES_REQUEST';
export const IMPORT_MOVIES_SUCCESS = 'IMPORT_MOVIES_SUCCESS';

export const FETCH_MOVIES_REQUEST = 'FETCH_ALL_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_ALL_MOVIES_SUCCESS';

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

export const fetchMoviesRequest = () => ({
    type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    movies,
});

export const fetchAllMovies = () => dispatch => {
    dispatch(fetchMoviesRequest());

    return api.getAllMovies()
        .then(data => dispatch(fetchMoviesSuccess(fromJS(data))));
};


export const fetchSearchMovies = ({ queryKey, queryValue }) => dispatch => {
    dispatch(fetchMoviesRequest());

    return api.searchMovies(queryKey, queryValue)
        .then(data => dispatch(fetchMoviesSuccess(fromJS(data))));
};
