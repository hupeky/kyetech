import React, {Component} from 'react'
import LazyLoad from 'react-lazyload'

import {withTheme} from '@material-ui/core/styles'
import Title from '../../UI/title/title'
import onScreen from '../../hoc/OnScreen/OnScreen'

import classes from './PageImage.css'

import Spinner from '../../UI/Spinner/Spinner'

class PageImage extends Component {
    render () {
        return (
            <LazyLoad
                height={500}
                offset={40000}
                placeholder={<Spinner />}>
                <div className={[classes.PageImage, this.props.onScreen ? classes.onScreen : null].join( " " )}>
                    <img style={{width: '100%'}} src={this.props.src} alt="" />
                    <div className={classes.text}>
                        <div
                            style={{backgroundColor: this.props.theme.palette.secondary.main}}
                            className={classes.title}>
                            <Title style={{opacity: 1, margin: 0}} color={'inherit'}>{this.props.title}</Title>
                        </div>
                        <div className={classes.subText}>{this.props.subText}</div>

                    </div>
                </div>
            </LazyLoad>
        )
    }
}


export default onScreen( withTheme()( PageImage ), true )
