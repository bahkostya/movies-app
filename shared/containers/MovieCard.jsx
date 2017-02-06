import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteMovie } from '../actions';

import ListItem from '../components/ListItem.jsx';

@connect(null, { deleteMovie })
export default class Header extends Component {
    state = {
        queryValue: '',
    }

    handleTouchTap = () => {
        this.props.fetchAllMovies();
        this.setState({
            queryValue: '',
        });
    }

    render() {
        const { movie } = this.props;
        return (
            <ListItem
                format={movie.get('format')}
                id={movie.get('_id')}
                stars={movie.get('stars')}
                title={movie.get('title')}
                year={movie.get('year')}
                onDelete={id => this.props.deleteMovie(id)}
            />
        );
    }
}
