import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import { addMovies, fetchAllMovies, fetchSearchMovies } from '../actions';

import SearchBox from '../components/SearchBox.jsx';
import Import from '../components/Import.jsx';

import parseFile from '../utils/UploadFile';

@connect(null, { addMovies, fetchAllMovies, fetchSearchMovies })
export default class Header extends Component {
    state = {
        queryValue: '',
    }

    componentDidMount() {
        this.props.fetchAllMovies();
    }

    handleSearch = (queryKey, queryValue) => {
        this.props.fetchSearchMovies(queryKey, queryValue);
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: '#00bcd4',
                }}
            >
                <Toolbar
                    style={{
                        backgroundColor: '#00bcd4',
                        maxWidth: '800px',
                        height: '64px',
                        width: '100%',
                        margin: '0 auto',
                    }}
                >
                    <SearchBox
                        queryValue={this.state.queryValue}
                        onSearch={this.handleSearch}
                    />
                    <ToolbarGroup lastChild>
                        <Import
                            onImport={file => {
                                parseFile(file).then(movies => this.props.addMovies(movies));
                            }}
                        />
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
}
