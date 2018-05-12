import React from 'react'
import Tile from '../../assets/SVG/Tile/Tile'
import ScaleIn from '../ScaleIn/ScaleIn'


import classes from './CubeTile.css'

const cubeTile = () => {
    return (
        <ScaleIn>
            <Tile/>
        </ScaleIn>
    )
}      

export default cubeTile
