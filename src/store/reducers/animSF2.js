import ken from '../../assets/32/animations/sf2/ken.png'
import ryu from '../../assets/32/animations/sf2/ryu.png'
import guile from '../../assets/32/animations/sf2/guile.png'
import blanka from '../../assets/32/animations/sf2/blanka.png'
import chunli from '../../assets/32/animations/sf2/chunli.png'
import dhalsim from '../../assets/32/animations/sf2/dhalsim.png'
import zangief from '../../assets/32/animations/sf2/zangief.png'
import ehonda from '../../assets/32/animations/sf2/ehonda.png'

let animSF2 = [
    {
        type: 'animation',
        key: 'animSF2',
        imgSrc: ken,
        rgbaArray: {},
        delay: 0,
        duration: 1

    },
    {
        imgSrc: ken,
        rgbaArray: {},
        delay: 1,
        duration: 1,
        label: 'ken'
    },
    {
        imgSrc: ryu,
        rgbaArray: {},
        delay: 1,
        duration: 1
    },
    {
        imgSrc: guile,
        rgbaArray: {},
        delay: 1,
        duration: 1
    },
    {
        imgSrc: blanka,
        rgbaArray: {},
        delay: 1,
        duration: 1
    },
    {
        imgSrc: chunli,
        rgbaArray: {},
        delay: 1,
        duration: 1
    },
    {
        imgSrc: dhalsim,
        rgbaArray: {},
        delay: 1,
        duration: 1
    },
    {
        imgSrc: zangief,
        rgbaArray: {},
        delay: 1,
        duration: 1
    },
    {
        imgSrc: ehonda,
        rgbaArray: {},
        delay: 1,
        duration: 1
    },
    {
        imgSrc: ken,
        rgbaArray: {},
        delay: 0,
        duration: 1,
        goTo: {
            id: 'ken',
            position: 'ken',
            loopCount: 1
        }
    }
]

export default animSF2

