const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    year: Number,
    format: String,
    stars: String,
});

mongoose.model('Movie', MovieSchema);
