const API_PREFIX = 'http://localhost:3000';

function getMovies() {
    const fetchOptions = {
        method: 'GET',
        mode: 'cors',
    };

    return fetch(`${API_PREFIX}/movies`, fetchOptions)
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
    getMovies,
    addMovies,
    deleteMovie,
};
