const API_PREFIX = 'http://localhost:3000';

function getAllMovies() {
    const fetchOptions = {
        method: 'GET',
        mode: 'cors',
    };

    return fetch(`${API_PREFIX}/movies`, fetchOptions)
        .then(response => response.json());
}

function searchMoviesByTitle(title) {
    const fetchOptions = {
        method: 'GET',
        mode: 'cors',
    };

    return fetch(`${API_PREFIX}/movies?title=${title}`, fetchOptions)
        .then(response => response.json());
}

function searchMoviesByStar(stars) {
    const fetchOptions = {
        method: 'GET',
        mode: 'cors',
    };

    return fetch(`${API_PREFIX}/movies?stars=${stars}`, fetchOptions)
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
    searchMoviesByTitle,
    searchMoviesByStar,
    addMovies,
    deleteMovie,
};
