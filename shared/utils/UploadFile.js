export function readFile(file) {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result);

        reader.onerror = () => reject(this);

        reader.readAsText(file);
    });
}

export function parseLineKey(line) {
    const key = line.split(':')[0];

    return key.trim().toLowerCase();
}

export function parseLineValue(line) {
    const value = line.split(':')[1];

    return value.trim();
}

export function parseMovie(text) {
    const rawMovieLines = text.split(/\n/);
    const movie = {};

    rawMovieLines.forEach(line => {
        if (parseLineKey(line) === 'release year') {
            movie.year = +parseLineValue(line);
            return;
        }

        if (parseLineKey(line) === 'stars') {
            const stars = parseLineValue(line).split(',').map(star => star.trim());
            movie.stars = stars;
            return;
        }

        movie[parseLineKey(line)] = parseLineValue(line);
    });

    return movie;
}

export function parseText(text) {
    const rawMovies = text.split(/\n\s*\n/);

    return rawMovies
        .filter(rawMovie => rawMovie.trim().length)
        .map(rawMovie => parseMovie(rawMovie));
}

export default function parseFile(file) {
    return new Promise(resolve => {
        readFile(file).then(text => resolve(parseText(text)));
    });
}
