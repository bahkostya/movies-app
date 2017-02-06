import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import {
    IMPORT_MOVIES_REQUEST,
    IMPORT_MOVIES_SUCCESS,
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    DELETE_MOVIE_REQUEST,
    DELETE_MOVIE_SUCCESS,
} from '../actions';

const defaultState = fromJS({
    ifFetching: false,
    isImporting: false,
    items: [],
});

const movies = (state = defaultState, action) => {
    switch (action.type) {
        case IMPORT_MOVIES_REQUEST:
            return state
                .set('isImporting', true);

        case FETCH_MOVIES_REQUEST:
            return state
                .set('ifFetching', true);

        case IMPORT_MOVIES_SUCCESS: {
            console.log(action.moviesCount);

            return state
                .set('isImporting', false);
        }

        case FETCH_MOVIES_SUCCESS:
            return state
                .set('ifFetching', false)
                .set('items', action.movies);

        case DELETE_MOVIE_SUCCESS: {
            const filteredMovies = state.get('items').filter(movie => {
                return movie.get('title') !== action.movieTitle;
            });

            return state.set('items', filteredMovies);
        }

        default:
            return state;
    }
};

export default combineReducers({
    movies,
});
