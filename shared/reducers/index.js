import { combineReducers } from 'redux-immutable';
import { fromJS, Map } from 'immutable';

import {
    ADD_MOVIES_REQUEST,
    ADD_MOVIES_SUCCESS,
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    DELETE_MOVIE_SUCCESS,
    CLOSE_MESSAGE_BOX,
} from '../actions';

const defaultState = fromJS({
    ifFetching: false,
    isImporting: false,
    items: [],
});

const movies = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MOVIES_REQUEST:
            return state
                .set('isImporting', true);

        case FETCH_MOVIES_REQUEST:
            return state
                .set('ifFetching', true);

        case ADD_MOVIES_SUCCESS: {
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

const message = (state = Map({ open: false, text: '' }), action) => {
    switch (action.type) {
        case ADD_MOVIES_SUCCESS: {
            let messageText = '';

            if (Array.isArray(action.newMovies)) {
                messageText = `${action.newMovies.length} movies were added`;
            } else {
                messageText = `Movie "${action.newMovies.title}" was added`;
            }

            return state
                .set('open', true)
                .set('text', messageText);
        }

        case DELETE_MOVIE_SUCCESS:
            return state
                .set('open', true)
                .set('text', `Movie "${action.movieTitle}" was deleted`);

        case CLOSE_MESSAGE_BOX: {
            return state
                .set('open', false)
                .set('text', '');
        }

        default:
            return state;
    }
};

export default combineReducers({
    movies,
    message,
});
