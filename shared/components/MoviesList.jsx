import React from 'react';

import MovieCard from './MovieCard.jsx';

import styles from './MoviesList.scss';

export default props => {
    const { movies } = props;

    return (
        <div
            className={styles.root}
        >
            {
                movies.length !== 0
                ? movies.map(movie => {
                    return (
                        <MovieCard
                            format={movie.get('format')}
                            id={movie.get('_id')}
                            key={movie.get('_id')}
                            stars={movie.get('stars')}
                            title={movie.get('title')}
                            year={movie.get('year')}
                        />
                    );
                })
                : <p>No movies to display</p>
            }
        </div>
    );
};
