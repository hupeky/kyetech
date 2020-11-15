import stand from '../../assets/sonicAnim/stand.png'
import walk1 from '../../assets/sonicAnim/walk1.png'
import walk2 from '../../assets/sonicAnim/walk2.png'
import walk3 from '../../assets/sonicAnim/walk3.png'
import walk4 from '../../assets/sonicAnim/walk4.png'
import walk5 from '../../assets/sonicAnim/walk5.png'
import walk6 from '../../assets/sonicAnim/walk6.png'
import run1 from '../../assets/sonicAnim/run1.png'
import run2 from '../../assets/sonicAnim/run2.png'
import run3 from '../../assets/sonicAnim/run3.png'
import run4 from '../../assets/sonicAnim/run4.png'

let sonicAnim = [
    {
        type: 'animation',
        key: 'sonicAnim',
        imgSrc: stand,
        rgbaArray: {},
        delay: 0,
        duration: 1
    },
    {
        imgSrc: stand,
        rgbaArray: {},
        delay: 0.3,
        duration: 0.1
    },
    {
        imgSrc: walk1,
        rgbaArray: {},
        delay: 0.25,
        duration: 0.1
    },
    {
        imgSrc: walk2,
        rgbaArray: {},
        delay: 0.25,
        duration: 0.1
    },
    {
        imgSrc: walk3,
        rgbaArray: {},
        delay: 0.25,
        duration: 0.05
    },
    {
        imgSrc: walk4,
        rgbaArray: {},
        delay: 0.2,
        duration: 0.05
    },
    {
        imgSrc: walk5,
        rgbaArray: {},
        delay: 0.2,
        duration: 0.05
    },
    {
        imgSrc: walk6,
        rgbaArray: {},
        delay: 0.2,
        duration: 0.05
    },
    {
        imgSrc: walk1,
        label: 'walkFast',
        rgbaArray: {},
        delay: 0.15,
        duration: 0.025
    },
    {
        imgSrc: walk2,
        rgbaArray: {},
        delay: 0.12,
        duration: 0.025
    },
    {
        imgSrc: walk3,
        rgbaArray: {},
        delay: 0.12,
        duration: 0.025
    },
    {
        imgSrc: walk4,
        rgbaArray: {},
        delay: 0.10,
        duration: 0.025
    },
    {
        imgSrc: walk5,
        rgbaArray: {},
        delay: 0.10,
        duration: 0.025
    },
    {
        imgSrc: walk6,
        rgbaArray: {},
        delay: 0.10,
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
        delay: 0.1,
        duration: 0.04
    },
    {
        imgSrc: run2,

        rgbaArray: {},
        delay: 0.1,
        duration: 0.04
    },
    {
        imgSrc: run3,
        rgbaArray: {},
        delay: 0.1,
        duration: 0.04
    },
    {
        imgSrc: run4,
        rgbaArray: {},
        delay: 0.1,
        duration: 0.04,
        goTo: {
            id: 'run',
            position: 'run',
            loopCount: 10000
        }
    }
]

export default sonicAnim