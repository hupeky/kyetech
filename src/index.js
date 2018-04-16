import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

import './globalStyles.css'

import App from './App'
import reducer from './store/reducer'

const theme = createMuiTheme( {
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
} );

const store = createStore( reducer )

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <Component />
            </MuiThemeProvider>
        </Provider>,
        document.getElementById( 'root' )
    )
}

render( App )
