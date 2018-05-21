import trundle1 from '../../assets/kartAnim/trundle1.png'
import trundle2 from '../../assets/kartAnim/trundle2.png'
import right1 from '../../assets/kartAnim/right1.png'
import right2 from '../../assets/kartAnim/right2.png'
import right3 from '../../assets/kartAnim/right3.png'
import rightSmoke1 from '../../assets/kartAnim/rightSmoke1.png'
import rightSmoke2 from '../../assets/kartAnim/rightSmoke2.png'


let animKart = [
    {
        label: 'trundle',
        type: 'animation',
        key: 'animKart',
        imgSrc: trundle1,
        rgbaArray: {},
        delay: 0,
        duration: 0.13
    },
    {
        type: 'animation',
        key: 'kartAnim',
        imgSrc: trundle2,
        rgbaArray: {},
        delay: 0,
        duration: 0.13,
        goTo: {
            id: 'trundle',
            position: 'trundle',
            loopCount: 6
        }
    },
    {
        imgSrc: right1,
        rgbaArray: {},
        delay: 0.1,
        duration: 0
    },
    {
        imgSrc: right2,
        rgbaArray: {},
        delay: 0.1,
        duration: 0
    },
    {
        imgSrc: right3,
        rgbaArray: {},
        delay: 0.1,
        duration: 0
    },
    {
        label: 'rightSmoke',
        imgSrc: rightSmoke1,
        rgbaArray: {},
        delay: 0.05,
        duration: 0.05
    },
    {
        imgSrc: rightSmoke2,
        rgbaArray: {},
        delay: 0.05,
        duration: 0.05,
        goTo: {
            id: 'rightSmoke',
            position: 'rightSmoke',
            loopCount: 10
        }
    },
    {
        imgSrc: right3,
        rgbaArray: {},
        delay: 0.05,
        duration: 0.05
    },
    {
        imgSrc: right2,
        rgbaArray: {},
        delay: 0.05,
        duration: 0.05
    },
    {
        imgSrc: right1,
        rgbaArray: {},
        delay: 0.05,
        duration: 0.05,
        goTo: {
            id: 'trundle2',
            position: 'trundle',
            loopCount: 1
        }
    }

]

export default animKart