import React, {Component} from 'react'

class ManageChildren extends React.Component {
    state = {

    }
    renderChildren () {
        return React.Children.map( this.props.children, (child,i) => {
            let clonedChild1 = React.cloneElement( child, {
                fillOpacity: "0.1",
                className:"fill",
                id:'fill'+i

            } )
            let clonedChild2 = React.cloneElement( child, {
                fill:"none",
                className:"stroke",
                id:'stroke'+i,
                stroke:child.props.fill,
                strokeWidth:"6"
            } )
            let clonedArray = []
            clonedArray.push([clonedChild1,clonedChild2])
            console.log(i)
            return clonedArray
        } )
    }

    render () {
        return (
            <svg pathcount={React.Children.count(this.props.children)} version="1.1" id={this.props.logoid} x="0px" y="0px" viewBox="0 0 400 300" enableBackground="new 0 0 400 300">
                {this.renderChildren()}
            </svg>
        )
    }
}
export default ManageChildren
