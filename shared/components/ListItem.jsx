import React, { Component } from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import styles from './ListItem.scss';

export default class ListItem extends Component {
    render() {
        const {
            id,
            format,
            stars,
            title,
            year,
        } = this.props;

        return (
            <Card
                className={styles.root}
            >
                <CardHeader
                    actAsExpander
                    showExpandableButton
                    style={{ marginRight: '36px' }}
                    title={title}
                />
                <IconButton
                    className={styles.deleteButton}
                    style={{ position: 'absolute' }}
                >
                    <ActionDelete
                        onTouchTap={() => this.props.onDelete(id)}
                    />
                </IconButton>
                <CardText expandable>
                    <div>Year: {year}</div>
                    <div>Format: {format}</div>
                    <div>Actors: {stars.join(', ')}</div>
                </CardText>
            </Card>
        );
    }
}
