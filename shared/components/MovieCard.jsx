import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import styles from './MovieCard.scss';

export default props => {
    const {
        id,
        format,
        stars,
        title,
        year,
    } = props;

    return (
        <Card
            className={styles.root}
        >
            <CardHeader
                actAsExpander
                showExpandableButton
                title={title}
            />
            <CardText expandable>
                <div>Year: {year}</div>
                <div>Format: {format}</div>
                <div>Actors: {stars.join(', ')}</div>
            </CardText>
        </Card>
    );
};
