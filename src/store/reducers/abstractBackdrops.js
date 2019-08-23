import color0 from '../../assets/32/abstract/color0.png'
import color2 from '../../assets/32/abstract/color2.png'
import color3 from '../../assets/32/abstract/color3.png'
import color4 from '../../assets/32/abstract/color4.png'
import color5 from '../../assets/32/abstract/color5.png'
import color6 from '../../assets/32/abstract/color6.png'
import color7 from '../../assets/32/abstract/color7.png'
import color8 from '../../assets/32/abstract/color8.png'

let abstractBackdrops = {}

abstractBackdrops.slides = [
    {
        type: 'slideShow',
        key: 'slides',
        imgSrc: color0,
        rgbaArray: {},
        delay: 0,
        duration: 2
    },
    {
        label: 'start',
        imgSrc: color0,
        rgbaArray: {},
        delay: 0,
        duration: 0
    },
    {
        imgSrc: color2,
        rgbaArray: {},
        delay: 0,
        duration: 5
    },
{
    imgSrc: color3,
    rgbaArray: {},
    delay: 0,
    duration: 5
},
{
    imgSrc: color4,
    rgbaArray: {},
    delay: 0,
    duration: 5
},
{
    imgSrc: color5,
    rgbaArray: {},
    delay: 0,
    duration: 5
},
{
    imgSrc: color6,
    rgbaArray: {},
    delay: 0,
    duration: 5
},
{
    imgSrc: color7,
    rgbaArray: {},
    delay: 0,
    duration: 6
},
{
    imgSrc: color8,
    rgbaArray: {},
    delay: 0,
    duration: 5
},
    {
        imgSrc: color0,
        rgbaArray: {},
        delay: 0,
        duration: 3,
        goTo: {
            id: 'start',
            position: 'start',
            loopCount: 500
        }
    }
]

export default {...abstractBackdrops}

