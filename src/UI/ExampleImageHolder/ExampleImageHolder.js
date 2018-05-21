import React from 'react'

import exampleImageData from './exampleImageData'
import ExampleImage from './ExampleImage/ExampleImage'

const exampleImageHolder = (props) => {
    let exampleImages = exampleImageData[props.company].map((exampleImage,i) => {
        return (
            <ExampleImage logo={exampleImageData.logos[props.company]} key={i} url={exampleImage.url} title={exampleImage.title} body={exampleImage.body}/>
        )
    })
    return exampleImages
}
export default exampleImageHolder
