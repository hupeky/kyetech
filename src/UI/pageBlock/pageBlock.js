import React from 'react'
import classes from './pageBlock.css'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

import Display3 from '../Display3/Display3'


const pageBlock = ( props ) => {

    const backgroundColor = {backgroundColor: props.backgroundColor}
    console.log (props.isVisible)
    return (
            <section style={backgroundColor} className={[classes.sectionBlock, props.isVisible ? 'visible' : null].join(' ') }>
                <Paper elevation={10}>
                    <div className={classes.contentBlock}>
                        <Display3>About me</Display3>
                        <Display3>About me</Display3>
                        <Display3>About me</Display3>
                    </div>
                </Paper>
            </section>

    )
}

export default pageBlock
