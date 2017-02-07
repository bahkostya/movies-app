import React from 'react';

import MovieCard from '../containers/MovieCard.jsx';

import styles from './MoviesList.scss';

export default props => {
    const {
        movies,
        currentQuery,
    } = props;
    return (
        <div
            className={styles.root}
        >
            {
                movies.size
                ?
                    movies.map(movie => (
                        <MovieCard
                            key={movie.get('_id')}
                            movie={movie}
                        />
                    ))
                :
                    <div className={styles.noResults}>
                        <p>
                            No results found for
                            <span className={styles.searchQuery}>
                                {` "${currentQuery}"`}
                            </span>
                        </p>
                    </div>
            }
        </div>
    );
};
