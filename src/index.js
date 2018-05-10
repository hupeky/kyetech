import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {BrowserRouter} from 'react-router-dom'

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'

import './globalStyles.css'
import App from './App'

import {createStore, combineReducers} from 'redux'
import ASceneReducer from './store/reducers/aSceneReducer'
import siteReducer from './store/reducers/siteReducer'

import themeCustomisation from './UI/themeCustomisation'

const rootReducer = combineReducers( {
    aScene: ASceneReducer,
    site: siteReducer
} )


const lightTheme = createMuiTheme( {
    ...themeCustomisation,
    palette: {
        ...themeCustomisation.palette,
        type: 'light' // Switching the dark mode on is a single property value change.
    }
} )

const store = createStore( rootReducer )

const Component = (
    <Provider store={store}>

            <MuiThemeProvider theme={lightTheme}>
            <BrowserRouter>
                <App />
                </BrowserRouter>
            </MuiThemeProvider>

    </Provider>
)

ReactDOM.render(Component, document.getElementById( 'root' ))
