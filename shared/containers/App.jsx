import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'normalize.css';

import { addMovies, closeMessageBox, fetchSearchMovies } from '../actions';

import Header from './Header.jsx';
import MoviesList from '../components/MoviesList.jsx';
import Loader from '../components/Loader.jsx';
import AddMovie from '../components/AddMovie.jsx';
import MessageBox from '../components/MessageBox.jsx';
import Pagination from '../components/Pagination.jsx';

import '../assets/main.css';

injectTapEventPlugin();

function mapStateToProps(state) {
    return {
        movies: state.getIn(['movies', 'items']),
        loading: state.getIn(['movies', 'isFetching']),
        currentQueryKey: state.getIn(['movies', 'currentQueryKey']),
        currentQueryValue: state.getIn(['movies', 'currentQueryValue']),
        isMessageBoxOpen: state.getIn(['message', 'open']),
        messageText: state.getIn(['message', 'text']),
        currentPage: state.getIn(['pagination', 'currentPage']),
        pagesTotal: state.getIn(['pagination', 'pagesTotal']),
    };
}

@connect(mapStateToProps, { addMovies, closeMessageBox, fetchSearchMovies })
export default class App extends Component {
    handlePageChange = newPage => {
        const {
            currentQueryKey,
            currentQueryValue,
        } = this.props;

        this.props.fetchSearchMovies(currentQueryKey, currentQueryValue, newPage);
    }

    render() {
        const {
            loading,
            movies,
            isMessageBoxOpen,
            messageText,
            currentPage,
            pagesTotal,
            currentQueryValue,
        } = this.props;

        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    <Loader loading={loading}>
                        <MoviesList
                            currentQuery={currentQueryValue}
                            movies={movies}
                        />
                    </Loader>
                    <Pagination
                        currentPage={currentPage}
                        pagesTotal={pagesTotal}
                        onPageChange={page => this.handlePageChange(page)}
                    />
                    <AddMovie
                        onMovieAdd={movie => this.props.addMovies(movie)}
                    />
                    <MessageBox
                        messageText={messageText}
                        open={isMessageBoxOpen}
                        onClose={() => this.props.closeMessageBox()}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}
