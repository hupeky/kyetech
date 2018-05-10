import React, {Component} from 'react'

import Auxillery from '../../hoc/Auxillery/Auxillery'
import CursorListener from './CursorListener/CursorListener'
import Animate from './Animate/Animate'
import Colour from './Colour/Colour'
import SkyGradient from './SkyGradient/SkyGradient'

class RegisterAframeComponents extends Component {
    render () {
        return (
            <Auxillery>
                <CursorListener />
                <Animate />
                <Colour />
                <SkyGradient />
            </Auxillery>
        )
    }
}

export default RegisterAframeComponents
