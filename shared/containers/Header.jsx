import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';

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

    handleTouchTap = () => {
        this.props.fetchAllMovies();
        this.setState({
            queryValue: '',
        });
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: '#81D4FA',
                }}
            >
                <Toolbar
                    style={{
                        backgroundColor: '#81D4FA',
                        maxWidth: '800px',
                        width: '100%',
                        margin: '0 auto',
                        color: '#ffffff',
                    }}
                >
                    <SearchBox
                        queryValue={this.state.queryValue}
                        onSearch={this.handleSearch}
                    />
                    <ToolbarGroup>
                        <ToolbarSeparator />
                        <RaisedButton
                            label="Show all"
                            onTouchTap={this.handleTouchTap}
                        />
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
