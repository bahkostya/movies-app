import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import api from '../shared/api';

import App from '../shared/containers/App.jsx';

// api.getMovies().then(data => console.log(data));
// api.searchMoviesByTitle('1').then(data => console.log(data));
// api.searchMoviesByStar('Mel Br').then(data => console.log(data));
import store from '../shared/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
