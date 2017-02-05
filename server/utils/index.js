const mongoose = require('mongoose');

require('../models/Movie');

const Movie = mongoose.model('Movie');

function setUpConnection({ host, port, dbName }) {
    mongoose.connect(`mongodb://${host}:${port}/${dbName}`);
}

function searchMovies(options) {
    const query = {};

    if ('title' in options) {
        query.title = { $regex: options.title, $options: 'i' };
    }

    if ('stars' in options) {
        query.stars = { $elemMatch: { $regex: options.stars, $options: 'i' } };
    }

    return Movie.find(query).sort({ title: 1 });
}

function createMovies(data) {
    return (Array.isArray(data))
    ? Promise.all(data.map(movie =>
        new Movie({
            title: movie.title,
            year: movie.year,
            format: movie.format,
            stars: movie.stars,
        }).save()))
    : new Movie({
        title: data.title,
        year: data.year,
        format: data.format,
        stars: data.stars,
    }).save();
}

function deleteMovie(id) {
    return Movie.findByIdAndRemove(id);
}

module.exports = {
    setUpConnection,
    deleteMovie,
    createMovies,
    searchMovies,
};
