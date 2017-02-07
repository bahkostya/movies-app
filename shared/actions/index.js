import { fromJS } from 'immutable';

import api from '../api';

export const ADD_MOVIES_SUCCESS = 'ADD_MOVIES_SUCCESS';

export const addMoviesSuccess = newMovies => ({
    type: ADD_MOVIES_SUCCESS,
    newMovies,
});

export const addMovies = movies => dispatch =>
    api.addMovies(movies).then(data => dispatch(addMoviesSuccess(data)));

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';

export const fetchMoviesRequest = (queryKey, queryValue) => ({
    type: FETCH_MOVIES_REQUEST,
    queryKey,
    queryValue,
});

export const fetchMoviesSuccess = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    movies,
});

export const fetchAllMovies = () => dispatch => {
    return api.getAllMovies()
        .then(data => dispatch(fetchMoviesSuccess(fromJS(data))));
};


export const fetchSearchMovies = (queryKey, queryValue, page = 1) => dispatch => {
    dispatch(fetchMoviesRequest(queryKey, queryValue));

    return api.searchMovies(queryKey, queryValue, page)
        .then(data => dispatch(fetchMoviesSuccess(fromJS(data))));
};

export const FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS';


export const fetchMovieDetailsSuccess = movie => ({
    type: FETCH_MOVIE_DETAILS_SUCCESS,
    movie,
});

export const fetchMovieDetails = id => dispatch =>
    api.getMovieDetails(id).then(data => dispatch(fetchMovieDetailsSuccess(fromJS(data))));

export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';

export const deleteMovieSuccess = movieTitle => ({
    type: DELETE_MOVIE_SUCCESS,
    movieTitle,
});

export const deleteMovie = movies => dispatch =>
    api.deleteMovie(movies).then(data => dispatch(deleteMovieSuccess(data.title)));

export const CLOSE_MESSAGE_BOX = 'CLOSE_MESSAGE_BOX';

export const closeMessageBox = () => ({
    type: CLOSE_MESSAGE_BOX,
});
