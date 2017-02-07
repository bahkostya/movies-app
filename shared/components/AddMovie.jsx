import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import AddActors from './AddActors.jsx';

import styles from './AddMovie.scss';

export default class AddMovie extends Component {
    state = {
        open: false,
        title: '',
        year: '',
        format: 'VHS',
        actors: [],
        errorText: {
            title: '',
            year: '',
            actors: '',
        },
    };

    clearState = () => {
        this.setState({
            title: '',
            year: '',
            format: 'VHS',
            actors: [],
            errorText: {
                title: '',
                year: '',
                actors: '',
            },
        });
    }

    handleOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = () => {
        this.setState({
            open: false,
        });

        this.clearState();
    };

    handleActorAdd = newActor => {
        this.setState({
            actors: [
                ...this.state.actors,
                newActor,
            ],
            errorText: {
                title: this.state.errorText.title,
                year: this.state.errorText.year,
                actors: '',
            },
        });
    }

    handleSelect = (event, index, value) => this.setState({ format: value });

    handleTitleChange = event => {
        this.setState({
            title: event.target.value,
            errorText: {
                title: '',
                year: this.state.errorText.year,
                actors: this.state.errorText.actors,
            },
        });
    }

    handleYearChange = event => {
        this.setState({
            year: event.target.value,
            errorText: {
                title: this.state.errorText.title,
                year: '',
                actors: this.state.errorText.actors,
            },
        });
    }

    handleSubmit = () => {
        if (!this.state.title || !this.state.year || !this.state.actors.length) {
            this.setState({
                errorText: {
                    title: !this.state.title && 'Please enter title',
                    year: !this.state.year && 'Please enter release year',
                    actors: !this.state.actors.length && 'Please enter at least 1 actor',
                },
            });
            return;
        }

        const movieData = {
            title: this.state.title,
            year: +this.state.year,
            format: this.state.format,
            stars: this.state.actors,
        };

        this.props.onMovieAdd(movieData);

        this.setState({
            open: false,
        });

        this.clearState();
    }

    render() {
        const actions = [
            <RaisedButton
                label="Cancel"
                onTouchTap={this.handleClose}
            />,
            <RaisedButton
                label="Add movie"
                primary
                onTouchTap={this.handleSubmit}
            />,
        ];

        const {
            title,
            year,
            format,
            open,
            actors,
            errorText,
        } = this.state;

        return (
            <div>
                <FloatingActionButton
                    className={styles.fixedButton}
                    mini
                    onTouchTap={this.handleOpen}
                >
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    actions={actions}
                    actionsContainerClassName={styles.actionButtons}
                    autoScrollBodyContent
                    contentStyle={{
                        maxWidth: '400px',
                        width: '100%',
                        padding: '0 10px',
                    }}
                    modal={false}
                    open={open}
                    title="Add new movie"
                    onRequestClose={this.handleClose}
                >
                    <form>
                        <TextField
                            className={styles.textField}
                            errorText={errorText.title}
                            fullWidth
                            hintText="Enter title"
                            value={title}
                            onChange={this.handleTitleChange}
                        />
                        <TextField
                            className={styles.textField}
                            errorText={errorText.year}
                            fullWidth
                            hintText="Enter year"
                            value={year}
                            onChange={this.handleYearChange}
                        />
                        <SelectField
                            autoWidth
                            className={styles.selectField}
                            floatingLabelText="Select format"
                            value={format}
                            onChange={this.handleSelect}
                        >
                            <MenuItem primaryText="VHS" value={'VHS'} />
                            <MenuItem primaryText="DVD" value={'DVD'} />
                            <MenuItem primaryText="Blu-Ray" value={'Blu-Ray'} />
                        </SelectField>
                        <AddActors
                            actors={actors}
                            errorText={this.state.errorText.actors}
                            onActorAdd={newActor => this.handleActorAdd(newActor)}
                        />
                    </form>
                </Dialog>
            </div>

        );
    }
}
