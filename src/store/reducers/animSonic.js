import stand from '../../assets/sonicAnim/standBG.png'
import walk1 from '../../assets/sonicAnim/walk1BG.png'
import walk2 from '../../assets/sonicAnim/walk2BG.png'
import walk3 from '../../assets/sonicAnim/walk3BG.png'
import walk4 from '../../assets/sonicAnim/walk4BG.png'
import walk5 from '../../assets/sonicAnim/walk5BG.png'
import walk6 from '../../assets/sonicAnim/walk6BG.png'
import run1 from '../../assets/sonicAnim/run1BG.png'
import run2 from '../../assets/sonicAnim/run2BG.png'
import run3 from '../../assets/sonicAnim/run3BG.png'
import run4 from '../../assets/sonicAnim/run4BG.png'

let sonicAnim = [
    {
        type: 'animation',
        key: 'sonicAnim',
        imgSrc: stand,
        rgbaArray: {},
        delay: 0,
        duration: 0.5
    },
    {
        imgSrc: stand,
        rgbaArray: {},
        delay: 0.1,
        duration: 0.1
    },
    {
        imgSrc: walk1,
        rgbaArray: {},
        delay: 0.1,
        duration: 0.1
    },
    {
        imgSrc: walk2,
        rgbaArray: {},
        delay: 0.1,
        duration: 0.1
    },
    {
        imgSrc: walk3,
        rgbaArray: {},
        delay: 0.05,
        duration: 0.05
    },
    {
        imgSrc: walk4,
        rgbaArray: {},
        delay: 0.05,
        duration: 0.05
    },
    {
        imgSrc: walk5,
        rgbaArray: {},
        delay: 0.05,
        duration: 0.05
    },
    {
        imgSrc: walk6,
        rgbaArray: {},
        delay: 0.05,
        duration: 0.05
    },
    {
        imgSrc: walk1,
        label: 'walkFast',
        rgbaArray: {},
        delay: 0.025,
        duration: 0.025
    },
    {
        imgSrc: walk2,
        rgbaArray: {},
        delay: 0.025,
        duration: 0.025
    },
    {
        imgSrc: walk3,
        rgbaArray: {},
        delay: 0.025,
        duration: 0.025
    },
    {
        imgSrc: walk4,
        rgbaArray: {},
        delay: 0.025,
        duration: 0.025
    },
    {
        imgSrc: walk5,
        rgbaArray: {},
        delay: 0.025,
        duration: 0.025
    },
    {
        imgSrc: walk6,
        rgbaArray: {},
        delay: 0.025,
        duration: 0.025,
        goTo: {
            id: 'walkFast',
            position: 'walkFast',
            loopCount: 1
        }
    },
    {
        imgSrc: run1,
        label: 'run',
        rgbaArray: {},
        delay: 0.04,
        duration: 0.04
    },
    {
        imgSrc: run2,

        rgbaArray: {},
        delay: 0.04,
        duration: 0.04
    },
    {
        imgSrc: run3,
        rgbaArray: {},
        delay: 0.04,
        duration: 0.04
    },
    {
        imgSrc: run4,
        rgbaArray: {},
        delay: 0.04,
        duration: 0.04,
        goTo: {
            id: 'run',
            position: 'run',
            loopCount: 10000
        }
    }
]

export default sonicAnim