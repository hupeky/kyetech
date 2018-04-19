import React, {Component} from 'react'

import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Navigation from '../../Navigation/Navigation'

const styles = {
    root: {
     
    },
    flex: {
        flex: 1,
    },
    menuButton: {
    }
}

class Layout extends Component {
    state = {
    }

    render () {
        let title = ''
        switch ( window.location.pathname ) {
            case '/':
                title = 'Home'
                break
            case '/cv':
                title = 'CV'
                break
            case '/refs':
                title = 'References'
                break
            default:
                title = ''
                break
        }

        console.log (this.props)
        const {classes} = this.props;
        return (
            <div>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {title}
                        </Typography>
                        <Navigation />
                    </Toolbar>
                </AppBar>
                {this.props.children}
                <div> Footer here </div>
            </div>
        )
    }
}

/* const mapStateToProps = state => { // map redux state to class props
    return {
        location: state.location,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: ( coords ) => dispatch( {type: actionTypes.START_ANIMATION, coords: coords} ),
        setDimensions: ( dimensions ) => dispatch( {type: actionTypes.SET_DIMENSIONS, dimensions: dimensions} )
    }
} */

// export default connect( mapStateToProps, mapDispatchToProps )( CardManager )

export default withStyles( styles )( Layout )
