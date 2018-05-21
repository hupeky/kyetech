import React, {Component} from 'react'
import ManageChildren from '../../../../hoc/ManageChildren/ManageChildren'

class ReactLogo extends Component {
    render () {
        return (
            <ManageChildren startDelay={this.props.startDelay} onScreen={this.props.onScreen} name={this.props.id}>
                <path fill="#F7DF1E" d="M80.1,30.1h239.8v239.8H80.1V30.1z"/>
                <path fill="#050505" d="M143.2,230.5l18.3-11.1c3.5,6.3,6.8,11.6,14.5,11.6c7.4,0,12.1-2.9,12.1-14.2v-76.6h22.5v76.9
                    c0,23.3-13.7,34-33.6,34C158.9,251.1,148.5,241.8,143.2,230.5"/>
                <path fill="#050505" d="M222.8,228.1l18.3-10.6c4.8,7.9,11.1,13.7,22.2,13.7c9.3,0,15.3-4.7,15.3-11.1c0-7.7-6.1-10.5-16.4-15
                    l-5.6-2.4c-16.3-6.9-27-15.6-27-34c0-16.9,12.9-29.8,33-29.8c14.3,0,24.6,5,32,18l-17.5,11.3c-3.9-6.9-8-9.7-14.5-9.7
                    c-6.6,0-10.8,4.2-10.8,9.7c0,6.8,4.2,9.5,13.8,13.7l5.6,2.4c19.2,8.2,29.9,16.6,29.9,35.4c0,20.3-15.9,31.4-37.3,31.4
                    C243,251.1,229.4,241.1,222.8,228.1"/>
            </ManageChildren>
        )
    }
}

export default ReactLogo
