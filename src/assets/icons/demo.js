import React from 'react'

const demo = ( props ) => {
    const size = {
        height: props.height ? `${props.height}px` : 'initial',
        width:props.width ? `${props.width}px` : 'initial'
    }
    return (
        <svg {...props} style={size} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 25 25" >
<path fill="#D3207F" d="M23,0H2C0.9,0,0,0.8,0,1.8v21.4c0,1,0.9,1.8,2,1.8H23c1.1,0,2-0.8,2-1.8V1.8C25,0.8,24.1,0,23,0z"/>
<g>
	<polygon id="shape1" fill="#FFFFFF" points="2.2,9 2.2,15.1 11.9,22.2 11.9,16 	"/>
	<polygon id="shape2" fill="#FFFFFF" points="12.9,15.9 12.9,22.1 22.6,15 22.6,8.9 	"/>
	<polygon id="shape3" fill="#FFFFFF" points="12.3,15.3 22,8.3 12.3,3 2.6,8.3 	"/>
</g>
        </svg>
    )
}
export default demo
