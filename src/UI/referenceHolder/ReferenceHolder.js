import React from 'react'

import referenceData from './referenceData'
import ReferenceItem from './referenceItem/ReferenceItem'

const referenceHolder = (props) => {
    let references = referenceData.map((reference,i) => {
        return (
            <ReferenceItem key={i} img={reference.img} title={reference.title} body={reference.body}/>
        )
    })
    return references
}
export default referenceHolder
