import React, {Component} from 'react'
import ManageChildren from '../../../../hoc/ManageChildren/ManageChildren'

class ReactLogo extends Component {
    render () {
        return (
            <ManageChildren startDelay={this.props.startDelay} onScreen={this.props.onScreen} name={this.props.id}>
<polygon fill="#FFFFFF" points="200.4,28 308.2,88.9 308.2,210.8 200.4,271.8 92.7,210.8 92.7,88.9 "/>
<path fill="#8ED6FB" d="M288.9,206.6L204,254.7v-37.4l52.9-29.1L288.9,206.6z M294.7,201.4V100.9l-31.1,17.9v64.6L294.7,201.4z
	 M111.6,206.6l84.9,48v-37.4l-52.9-29.1L111.6,206.6L111.6,206.6z M105.8,201.4V100.9l31.1,17.9v64.6L105.8,201.4L105.8,201.4z
	 M109.4,94.4l87.1-49.3v36.2L140.7,112l-0.4,0.2L109.4,94.4L109.4,94.4z M291.1,94.4L204,45.1v36.2l55.8,30.7l0.4,0.2L291.1,94.4
	L291.1,94.4z"/>
<polygon fill="#1C78C0" points="196.5,208.8 144.3,180 144.3,123.2 196.5,153.3 196.5,208.8 "/>
<polygon fill="#1C78C0" points="204,208.8 256.2,180.1 256.2,123.2 204,153.3 "/>
<polygon fill="#1C78C0" points="147.8,116.6 200.3,87.8 252.7,116.6 200.3,146.8 147.8,116.6 " />
            </ManageChildren>
        )
    }
}

export default ReactLogo
