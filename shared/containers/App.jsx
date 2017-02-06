import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addMovies } from '../actions';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header.jsx';
import MoviesList from '../components/MoviesList.jsx';
import Loader from '../components/Loader.jsx';
import AddMovie from '../components/AddMovie.jsx';

import 'normalize.css';
import '../assets/main.css';

injectTapEventPlugin();

@connect(mapStateToProps, { addMovies })
export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    <Loader loading={this.props.loading}>
                        <MoviesList movies={this.props.movies} />
                    </Loader>
                    <AddMovie
                        onMovieAdd={movie => this.props.addMovies(movie)}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.getIn(['movies', 'items']),
        loading: state.getIn(['movies', 'isFetching']),
    };
}
