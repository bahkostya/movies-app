import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import { deleteMovie, fetchMovieDetails } from '../actions';

@connect(null, { deleteMovie, fetchMovieDetails })
export default class Header extends Component {
    state = {
        queryValue: '',
        expanded: false,
    }

    handleTouchTap = () => {
        this.props.fetchAllMovies();
        this.setState({
            queryValue: '',
        });
    }

    handleExpandChange = expanded => {
        if (!this.props.movie.get('detailsLoaded')) {
            this.props.fetchMovieDetails(this.props.movie.get('_id'));
        }

        this.setState({
            expanded,
        });
    };

    render() {
        const { movie } = this.props;

        return (
            <Card
                expanded={this.state.expanded}
                style={{
                    marginTop: '16px',
                    position: 'relative',
                }}
                onExpandChange={this.handleExpandChange}
            >
                <CardHeader
                    actAsExpander
                    showExpandableButton
                    style={{ marginRight: '36px' }}
                    title={movie.get('title')}
                />
                <IconButton
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                    }}
                >
                    <ActionDelete
                        onTouchTap={() => this.props.deleteMovie(movie.get('_id'))}
                    />
                </IconButton>
                {
                    movie.get('detailsLoaded') &&
                    <CardText expandable>
                        <div>Year: {movie.get('year')}</div>
                        <div>Format: {movie.get('format')}</div>
                        <div>Actors: {movie.get('stars').join(', ')}</div>
                    </CardText>
                }

            </Card>
        );
    }
}
