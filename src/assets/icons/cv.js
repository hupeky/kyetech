import React from 'react'

const DownloadCV = ( props ) => {
    const size = {
        height: props.height ? `${props.height}px` : 'initial',
        width:props.width ? `${props.width}px` : 'initial'
    }
    return (
<svg style={size} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 25 25" >
<path fill="#D3207F" d="M22.1,0.2H1.7C0.8,0.2,0,0.9,0,1.9v20.4C0,23.2,0.8,24,1.7,24h20.4c0.9,0,1.7-0.8,1.7-1.7V1.9
	C23.8,0.9,23.1,0.2,22.1,0.2z"/>
	<path fill="#FFFFFF" d="M10.3,1.7h3.2c0.5,0,1,0.4,1,1v6.8H18c0.7,0,1.1,0.9,0.6,1.4l-6.1,6.2c-0.3,0.3-0.8,0.3-1.1,0l-6.2-6.2
		c-0.5-0.5-0.1-1.4,0.6-1.4h3.5V2.6C9.3,2.1,9.8,1.7,10.3,1.7z"/>
	<path fill="#FFFFFF" d="M22.3,16.9v4.5c0,0.5-0.4,1-1,1H2.5c-0.5,0-1-0.4-1-1v-4.5c0-0.5,0.4-1,1-1h5.9l2,2c0.8,0.8,2.1,0.8,2.9,0
		l2-2h5.9C21.8,15.9,22.3,16.3,22.3,16.9z"/>
</svg>

    )
}
export default DownloadCV