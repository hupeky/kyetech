import React, {Component} from 'react'
import ManageChildren from '../../../../hoc/ManageChildren/ManageChildren'

class ReactLogo extends Component {
    render () {
        return (
            <ManageChildren startDelay={this.props.startDelay} onScreen={this.props.onScreen} name={this.props.id}>
                <polygon fill="#E83B68" points="297.1,237.4 229,276.1 172.5,62.7 241,24.9 "/>
                <path fill="#871812" d="M172.5,62.7l-5.1-2.6l-55.5,150l5.3,4.3l14.7-39.8l76.6,43.7l15.3,56.6l5.1,1.1L172.5,62.7z M133.7,168.6
                    l35.4-97.4l36.5,137.9L133.7,168.6z"/>
                <polygon fill="#B82950" points="241,24.9 172.5,62.7 167.4,60.1 235,23.1 "/>
                <polygon fill="#F0E64B" points="187,138.7 205.6,209.1 133.7,168.6 "/>
                <polygon fill="#49C1F0" points="187,138.7 133.7,168.6 169.1,71.2 "/>
                <path fill="#A02140" d="M103.2,189.3"/>
                <path fill="#A02140" d="M138.7,91.9"/>
                <polygon fill="#228174" points="117.2,214.5 160.1,190.7 131.9,174.7 "/>
            </ManageChildren>
        )
    }
}

export default ReactLogo
