import React, {Component} from 'react'
import classes from './SkillBlock.css'

import ReactLogo from '../../../assets/SVG/SkillBlocks/React'

class SkillBlock extends Component {
    render () {
        return (
            <ReactLogo className={classes.ReactLogo} />
        )
    }
}

export default SkillBlock
