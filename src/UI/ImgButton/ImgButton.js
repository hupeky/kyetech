import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
const styles = theme => ( {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
    },
    image: {
        position: 'relative',
        height: 'auto',
        
        width:'100%',
        '&:hover': {
            zIndex: 1
        },
        '&:hover $imageBackdrop': {
            opacity: 0.2
        },
        '&:hover $imageTitle': {
            border: '1px solid currentColor'
        }
    },
    img: {
        height: '100%',
        width: '100%',
        imageRendering: 'pixelated'
    },
    imageButton: {
        position: 'absolute', 
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white

    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%'
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.white,
        opacity: 0.08,
        transition: '0.2s'
    },
    imageTitle: {
        position: 'absolute',
        bottom:0,
        color:'#000'
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create( 'opacity' )
    }
} )



function imgButton ( props ) {
    const {classes} = props

    return (
        
        <div className={classes.root}>
            <ButtonBase
                onClick={props.click}
                focusRipple
                key={props.key}
                className={classes.image}
            >
            
                <img alt="" className={classes.img} src={props.src} />
                
                <span className={classes.imageBackdrop} />
                
            </ButtonBase>
        </div>
        
    )
}

export default withStyles( styles )( imgButton )
