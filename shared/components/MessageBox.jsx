import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class MessageBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    componentWillReceiveProps = newPrors => {
        this.setState({
            open: newPrors.open,
        });
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });

        this.props.onClose();
    };

    render() {
        return (
            <div>
                <Snackbar
                    autoHideDuration={2000}
                    message={this.props.messageText}
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        );
    }
}
