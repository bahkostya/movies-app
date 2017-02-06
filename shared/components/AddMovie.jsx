import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import styles from './AddMovie.scss';

export default class AddMovie extends Component {
    state = {
        open: false,
        title: '',
        year: '',
        format: 'VHS',
        newActor: '',
        actors: [],
    };

    clearState = () => {
        this.setState({
            title: '',
            year: '',
            format: 'VHS',
            newActor: '',
            actors: [],
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

    handleActorAdd = () => {
        this.state.newActor.trim().length &&
        this.setState({
            actors: [
                ...this.state.actors,
                this.state.newActor,
            ],
            newActor: '',
        });
    }

    handleSelect = (event, index, value) => this.setState({ format: value });

    handleTitleChange = event => this.setState({ title: event.target.value });

    handleYearChange = event => this.setState({ year: event.target.value });

    handleNewActorChange = event => {
        this.setState({ newActor: event.target.value });
    }

    handleSubmit = () => {
        const movieData = {
            title: this.state.title,
            year: +this.state.year,
            format: this.state.format,
            actors: this.state.actors,
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
            newActor,
        } = this.state;

        return (
            <div>
                <FloatingActionButton
                    className={styles.fixedButton}
                    onTouchTap={this.handleOpen}
                >
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    actions={actions}
                    actionsContainerClassName={styles.actionButtons}
                    autoScrollBodyContent
                    contentStyle={{ maxWidth: '400px' }}
                    modal={false}
                    open={open}
                    title="Add new movie"
                    onRequestClose={this.handleClose}
                >
                    <form>
                        <TextField
                            className={styles.textField}
                            fullWidth
                            hintText="Enter title"
                            value={title}
                            onChange={this.handleTitleChange}
                        />
                        <TextField
                            className={styles.textField}
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
                        <div
                            className={styles.actorsBlock}
                        >
                            <div
                                className={styles.label}
                            >
                                Actors:
                            </div>
                            <ul>
                                {
                                    actors.map(actor => {
                                        return (
                                            <li
                                                key={actor}
                                            >
                                                {actor}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <TextField
                                className={styles.textField}
                                fullWidth
                                hintText="Enter actor name"
                                value={newActor}
                                onChange={this.handleNewActorChange}
                            />
                            <FlatButton
                                label="Add actor"
                                primary
                                style={{
                                    margin: '0 auto',
                                    display: 'block',
                                }}
                                onTouchTap={this.handleActorAdd}
                            />
                        </div>
                    </form>
                </Dialog>
            </div>

        );
    }
}
