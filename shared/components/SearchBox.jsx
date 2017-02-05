import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import styles from './SearchBox.scss';

const ENTER_KEY = 13;

const DropDownMenuStyles = {
    underlineStyle: {
        borderTop: 'none',
    },
    iconStyle: {
        fill: '#000000',
        top: 0,
    },
    style: {
        lineHeight: '48px',
    },
};

export default class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            searchType: 'title',
        };
    }

    handleTextChange = e => {
        this.setState({
            query: e.target.value,
        });
    }

    handleKeyDown = e => {
        if (e.keyCode === ENTER_KEY) {
            this.props.onSearch(this.state);
        }
    }

    handleChange = (event, index, value) => {
        this.setState({
            searchType: value,
        });
    }

    render() {
        const { query } = this.state;

        return (
            <div
                className={styles.root}
            >
                <DropDownMenu
                    className={styles.dropDown}
                    iconStyle={DropDownMenuStyles.iconStyle}
                    labelStyle={DropDownMenuStyles.style}
                    underlineStyle={DropDownMenuStyles.underlineStyle}
                    value={this.state.searchType}
                    onChange={this.handleChange}
                >
                    <MenuItem
                        primaryText="Search by title"
                        value={'title'}
                    />
                    <MenuItem
                        primaryText="Search by actor's name"
                        value={'stars'}
                    />
                </DropDownMenu>
                <TextField
                    className={styles.textField}
                    fullWidth
                    hintText="Search"
                    underlineShow
                    value={query}
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}
