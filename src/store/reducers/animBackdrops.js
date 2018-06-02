import megamanBG from '../../assets/32/single/megamanBG.png'
import sonicBG from '../../assets/32/single/sonicBG.png'
import zeldaBG from '../../assets/32/single/zeldaBG.png'
import tetrisBG from '../../assets/32/single/tetrisBG.png'
import marioBG from '../../assets/32/single/marioBG.png'
import ryuBG from '../../assets/32/single/ryuBG.png'
import kartBG from '../../assets/32/single/kartBG.png'
import rtypeBG from '../../assets/32/single/rtypeBG.png'

let animBackdrops = [
    {
        type: 'animation',
        key: 'animBackdrops',
        imgSrc: megamanBG,
        rgbaArray: {},
        delay: 0,
        duration: 1 

    },
    {
        imgSrc: megamanBG,
        rgbaArray: {},
        delay: 0,
        duration: 0.7,
        label: 'start'
    },
    {
        imgSrc: sonicBG,
        rgbaArray: {},
        delay: 1,
        duration: 2
    },
    {
        imgSrc: marioBG,
        rgbaArray: {},
        delay: 1,
        duration: 2
    },
    {
        imgSrc: ryuBG,
        rgbaArray: {},
        delay: 1,
        duration: 2
    },
    {
        imgSrc: zeldaBG,
        rgbaArray: {},
        delay: 1,
        duration: 2
    },
    {
        imgSrc: megamanBG,
        rgbaArray: {},
        delay: 1,
        duration:2
    },
    {
        imgSrc: tetrisBG,
        rgbaArray: {},
        delay: 1,
        duration: 2
    },
    {
        imgSrc: kartBG,
        rgbaArray: {},
        delay: 1,
        duration: 2
    },
    {
        imgSrc: rtypeBG,
        rgbaArray: {},
        delay: 1,
        duration: 2
    },
    {
        imgSrc: megamanBG,
        rgbaArray: {},
        delay: 0,
        duration: 2,
        goTo: {
            id: 'megamanBG',
            position: 'start',
            loopCount: 10
        }
    }
]

export default animBackdrops

