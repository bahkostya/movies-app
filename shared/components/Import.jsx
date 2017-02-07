import React, { Component } from 'react';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FileUpload from 'material-ui/svg-icons/file/file-upload';
import MenuItem from 'material-ui/MenuItem';

export default class Import extends Component {
    handleChange = e => {
        if (e.target.files.length) {
            this.props.onImport(e.target.files[0]);
        }
    }

    render() {
        return (
            <IconMenu
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                iconButtonElement={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
                targetOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
                <label htmlFor="fileInput">
                    <MenuItem
                        leftIcon={
                            <FileUpload />
                        }
                        primaryText="Import"
                    />
                </label>
                <input
                    accept=".txt"
                    id="fileInput"
                    style={{ display: 'none' }}
                    type="file"
                    onChange={this.handleChange}
                />
            </IconMenu>
        );
    }
}
