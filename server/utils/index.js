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

    const limit = 10;
    const skip = (options.page - 1) * limit;

    return Promise.all([
        Movie.find(query, { title: 1 }).sort({ title: 1 }).skip(skip).limit(limit),
        Movie.find(query).count(),
    ]).then(result => ({
        data: result[0],
        currentPage: +options.page,
        pagesTotal: Math.ceil(result[1] / 10),
    }));
}

function getMovieDetails(id) {
    return Movie.findById(id);
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
    getMovieDetails,
};
