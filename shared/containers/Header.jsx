import React, { Component } from 'react';
import { connect } from 'react-redux';

import { importMovies, fetchAllMovies } from '../actions';

import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import SearchBox from '../components/SearchBox.jsx';
import Import from '../components/Import.jsx';

import parseFile from '../utils/UploadFile';

@connect(null, { importMovies, fetchAllMovies })
export default class Header extends Component {
    render() {
        const { importMovies, fetchAllMovies } = this.props;

        return (
            <Toolbar>
                <ToolbarGroup firstChild>
                    <SearchBox
                        onSearch={search => console.log(search)}
                    />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarSeparator />
                    <RaisedButton
                        label="Show all"
                        primary
                        onTouchTap={() => fetchAllMovies()}
                    />
                    <Import
                        onImport={file => {
                            parseFile(file).then(movies => importMovies(movies));
                        }}
                    />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}
