import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './Header.jsx';

import 'normalize.css';

injectTapEventPlugin();

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}
