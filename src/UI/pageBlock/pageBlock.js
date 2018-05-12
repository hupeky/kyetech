import React from 'react'
import OnScreen from '../../hoc/OnScreen/OnScreen'
import classes from './pageBlock.css'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'


const pageBlock = ( props ) => {

    const backgroundColor = {backgroundColor: props.backgroundColor}
    console.log( props )
    return (

        <section style={backgroundColor} className={[classes.sectionBlock, props.onScreen ? 'visible' : null].join( ' ' )}>
            <Paper elevation={10}>
                <div className={classes.contentBlock}>
                    {props.children}
                </div>
            </Paper>
        </section>


    )
}

const updatedPageBlock = OnScreen( pageBlock )
export default updatedPageBlock
