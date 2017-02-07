import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import styles from './AddActors.scss';

export default class AddActors extends Component {
    state = {
        newActor: '',
    }

    handleActorAdd = () => {
        if (this.state.newActor.trim().length) {
            this.setState({
                newActor: '',
            });

            this.props.onActorAdd(this.state.newActor);
        }
    }

    handleNewActorChange = event => {
        this.setState({
            newActor: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <div className={styles.label} >
                    Actors:
                </div>
                <ul className={styles.actorsList} >
                    {
                        this.props.actors.map(actor => (
                            <li key={actor + Date.now()} >
                                {actor}
                            </li>
                        ))
                    }
                </ul>
                <TextField
                    className={styles.textField}
                    errorText={this.props.errorText}
                    fullWidth
                    hintText="Enter actor's name"
                    value={this.state.newActor}
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
        );
    }
}
