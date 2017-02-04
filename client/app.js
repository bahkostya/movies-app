import ReactDOM from 'react-dom';
import React from 'react';

import api from '../shared/api';

api.getMovies().then(data => console.log(data));

ReactDOM.render(
    <h1>Hello!</h1>,
    document.getElementById('root'),
);
