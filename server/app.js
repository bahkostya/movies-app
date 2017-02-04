const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./utils');

const app = express();

const dbConfig = {
    host: 'localhost',
    port: 27017,
    dbName: 'movies',
};

db.setUpConnection(dbConfig);

app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.get('/movies', (req, res) => {
    db.listMovies().then(data => res.send(data));
});

app.post('/movies', (req, res) => {
    db.createMovies(req.body).then(data => res.send(data));
});

app.delete('/movies/:id', (req, res) => {
    db.deleteMovie(req.params.id).then(data => res.send(data));
});

const server = app.listen(3000, () => {
    const port = server.address().port;
    console.log(`Server is up and running on port ${port}`);
});
