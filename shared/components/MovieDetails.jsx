import React from 'react';

import styles from './MovieDetails.scss';

export default props => {
    const {
        year,
        format,
        stars,
    } = props;

    return (
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <b>Relese year:</b> {year}
            </li>
            <li className={styles.listItem}>
                <b>Format:</b> {format}
            </li>
            <li className={styles.listItem}>
                <b>Actors:</b> {stars.join(', ')}
            </li>
        </ul>
    );
};
