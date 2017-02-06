import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { ToolbarGroup } from 'material-ui/Toolbar';

import styles from './SearchBox.scss';

const ENTER_KEY = 13;

const DropDownMenuStyles = {
    underlineStyle: {
        borderTop: 'none',
    },
    iconStyle: {
        fill: '#000000',
        top: 0,
        right: '8px',
    },
    labelStyle: {
        lineHeight: '48px',
        paddingRight: '48px',
        paddingLeft: '16px',
    },
    style: {
        marginRight: 0,
    },
};

export default class SearchBox extends Component {
    state = {
        queryKey: 'title',
        queryValue: this.props.queryValue,
    }

    componentWillReceiveProps() {
        this.setState({
            queryValue: '',
        });
    }

    handleTextChange = e => {
        this.setState({
            queryValue: e.target.value,
        });
    }

    handleKeyDown = e => {
        if (e.keyCode === ENTER_KEY) {
            this.props.onSearch(this.state);
        }
    }

    handleTouchTap = () => {
        this.props.onSearch(this.state);
    }

    handleChange = (event, index, value) => {
        this.setState({
            queryKey: value,
        });
    }

    render() {
        const { queryKey, queryValue } = this.state;

        return (
            <ToolbarGroup
                className={styles.root}
                firstChild
            >
                <TextField
                    className={styles.textField}
                    fullWidth
                    hintText="Search movie"
                    underlineShow
                    value={queryValue}
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleKeyDown}
                />
                <IconButton>
                    <ActionSearch
                        onTouchTap={this.handleTouchTap}
                    />
                </IconButton>
                <DropDownMenu
                    className={styles.dropDown}
                    iconStyle={DropDownMenuStyles.iconStyle}
                    labelStyle={DropDownMenuStyles.labelStyle}
                    style={DropDownMenuStyles.style}
                    underlineStyle={DropDownMenuStyles.underlineStyle}
                    value={queryKey}
                    onChange={this.handleChange}
                >
                    <MenuItem
                        primaryText="Titles"
                        value={'title'}
                    />
                    <MenuItem
                        primaryText="Actors"
                        value={'stars'}
                    />
                </DropDownMenu>
            </ToolbarGroup>
        );
    }
}
