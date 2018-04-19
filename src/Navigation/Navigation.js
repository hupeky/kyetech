import React from 'react'
import Auxillery from '../hoc/Auxillery/Auxillery'

import {NavLink} from 'react-router-dom'

import Button from 'material-ui/Button'
import {withStyles} from 'material-ui/styles'

import localClasses from './Navigation.css'

const navButtonStyles = {
    height: {
        height: 50,
        textTransform: 'capitalize',
        marginRight: '10px',
        textDecoration: 'none',
    }
}

const navigation = ( props ) => {
    const {classes} = props;
    return (
        <Auxillery>
            <NavLink
                to="/cv" exact={props.exact}
                activeClassName={localClasses.active}
                className={localClasses.noUnderline}>
                <Button
                    className={classes.height}
                    variant="raised"
                    size="large"
                    color="primary">
                    <div
                        className={localClasses.button}
                        style={{
                            position: 'absolute',
                            width: '100%', height: '100%',
                            top: 0, left: 0,
                            backgroundColor: 'red'
                        }} />
                    <div style={{position: 'relative'}}>CV</div>
                </Button>
            </NavLink>

            <NavLink
                to="/refs" exact={props.exact}
                activeClassName={localClasses.active}
                className={localClasses.noUnderline}>
                <Button
                    className={classes.height}
                    variant="raised"
                    size="large"
                    color="primary">
                    <div
                        className={localClasses.button}
                        style={{
                            position: 'absolute',
                            width: '100%', height: '100%',
                            top: 0, left: 0,
                            backgroundColor: 'red'
                        }} />
                    <div style={{position: 'relative'}}>References</div>
                </Button>
            </NavLink>

            <NavLink
                to="/" exact={true}
                activeClassName={localClasses.active}
                className={localClasses.noUnderline}>
                <Button
                    className={classes.height}
                    variant="raised"
                    size="large"
                    color="primary">
                    <div
                        className={localClasses.button}
                        style={{
                            position: 'absolute',
                            width: '100%', height: '100%',
                            top: 0, left: 0,
                            backgroundColor: 'red'
                        }} />
                    <div style={{position: 'relative'}}>Home</div>
                </Button>
            </NavLink>
        </Auxillery>
    )
}
export default withStyles( navButtonStyles )( navigation )

