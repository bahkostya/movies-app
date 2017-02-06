import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'normalize.css';

import { addMovies, closeMessageBox } from '../actions';

import Header from './Header.jsx';
import MoviesList from '../components/MoviesList.jsx';
import Loader from '../components/Loader.jsx';
import AddMovie from '../components/AddMovie.jsx';
import MessageBox from '../components/MessageBox.jsx';

import '../assets/main.css';

injectTapEventPlugin();


function mapStateToProps(state) {
    return {
        movies: state.getIn(['movies', 'items']),
        loading: state.getIn(['movies', 'isFetching']),
        isMessageBoxOpen: state.getIn(['message', 'open']),
        messageText: state.getIn(['message', 'text']),
    };
}

@connect(mapStateToProps, { addMovies, closeMessageBox })
export default class App extends Component {
    render() {
        const {
            loading,
            movies,
            addMovies,
            isMessageBoxOpen,
            closeMessageBox,
            messageText,
        } = this.props;

        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    <Loader loading={loading}>
                        <MoviesList movies={movies} />
                    </Loader>
                    <AddMovie
                        onMovieAdd={movie => addMovies(movie)}
                    />
                    <MessageBox
                        messageText={messageText}
                        open={isMessageBoxOpen}
                        onClose={() => closeMessageBox()}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}
