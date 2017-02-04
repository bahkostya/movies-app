const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./utils');

const app = express();

// Set up connection of database
db.setUpConnection();
// Using bodyParser middleware
app.use(bodyParser.json());
// Allow requests from any origin
app.use(cors({ origin: '*' }));


const server = app.listen(3000, () => {
    const port = server.address().port;
    console.log(`Server is up and running on port ${port}`);


    const temp = [
        {
            title: 'Blazing 1',
            year: 2012,
            format: 'CD',
            stars: 'Clevon Little, Harvey Korman',
        },
        {
            title: 'Blazing 2',
            year: 1234,
            format: 'VHS',
            stars: 'Madeline Kahn',
        },
        {
            title: 'wqweqwe',
            year: 1974,
            format: 'DVD',
            stars: 'Slim Pickens, Madeline Kahn',
        },
    ];

    // db.importMovies(temp).then(data => console.log('======', data));
    // db.deleteMovie('5895233b58569d862083210d').then(data => console.log('======', data));
    // db.listMovies().then(data => console.log(data));
});
