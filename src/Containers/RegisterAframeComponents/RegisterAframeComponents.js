import React, {Component} from 'react'

import Auxillery from '../../hoc/Auxillery/Auxillery'
import CursorListener from './CursorListener/CursorListener'
import Animate from './Animate/Animate'

class RegisterAframeComponents extends Component {
    render () {
        return (
            <Auxillery>
                <CursorListener />
                <Animate />
            </Auxillery>
        )
    }
}

export default RegisterAframeComponents
