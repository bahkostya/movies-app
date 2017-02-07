import React from 'react';

import MovieCard from '../containers/MovieCard.jsx';

import styles from './MoviesList.scss';

export default props => {
    const { movies } = props;
    return (
        <div
            className={styles.root}
        >
            {
                movies.size
                ? movies.map(movie => {
                    return (
                        <MovieCard
                            key={movie.get('_id')}
                            movie={movie}
                        />
                    );
                })
                : <p>No movies to display</p>
            }
        </div>
    );
};
