import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import {
    IMPORT_MOVIES_REQUEST,
    IMPORT_MOVIES_SUCCESS,
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
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
// .update('items', items => items.concat(action.movies));
        case FETCH_MOVIES_SUCCESS:
            return state
                .set('ifFetching', false)
                .set('items', action.movies);

        default:
            return state;
    }
};

export default combineReducers({
    movies,
});
