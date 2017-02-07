const API_PREFIX = 'http://localhost:3000';

function getAllMovies(page = 1) {
    const fetchOptions = {
        method: 'GET',
        mode: 'cors',
    };

    return fetch(`${API_PREFIX}/movies?page=${page}`, fetchOptions)
        .then(response => response.json());
}


function getMovieDetails(id) {
    const fetchOptions = {
        method: 'GET',
        mode: 'cors',
    };

    return fetch(`${API_PREFIX}/movies/${id}`, fetchOptions)
        .then(response => response.json());
}

function searchMovies(queryKey, queryValue, page) {
    const fetchOptions = {
        method: 'GET',
        mode: 'cors',
    };

    return fetch(`${API_PREFIX}/movies?page=${page}&${queryKey}=${queryValue}`, fetchOptions)
        .then(response => response.json());
}

function addMovies(movies) {
    const fetchOptions = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(movies),
    };

    return fetch(`${API_PREFIX}/movies`, fetchOptions)
        .then(response => response.json());
}

function deleteMovie(id) {
    const fetchOptions = {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    };

    return fetch(`${API_PREFIX}/movies/${id}`, fetchOptions)
        .then(response => response.json());
}

export default {
    getAllMovies,
    searchMovies,
    addMovies,
    deleteMovie,
    getMovieDetails,
};
