const mongoose = require('mongoose');

require('../models/Movie');

const Movie = mongoose.model('Movie');

const dbConfig = {
    host: 'localhost',
    port: 27017,
    dbName: 'movies',
};

function setUpConnection() {
    mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`);
}

function listMovies() {
    return Movie.find().sort({ title: 1 });
}

function createMovie(data) {
    const movie = new Movie({
        title: data.title,
        year: data.year,
        format: data.format,
        stars: data.stars,
    });

    return movie.save();
}

function importMovies(movies) {
    return Promise.all(movies.map(movie => {
        return new Movie({
            title: movie.title,
            year: movie.year,
            format: movie.format,
            stars: movie.stars,
        }).save();
    }));
}

function deleteMovie(id) {
    return Movie.findByIdAndRemove(id);
}

module.exports = {
    setUpConnection,
    listMovies,
    createMovie,
    deleteMovie,
    importMovies,
};
