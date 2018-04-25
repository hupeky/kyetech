import getPixels from 'get-pixels'


import ken from '../../assets/ken.png'
import ryu from '../../assets/ryu.png'
import eHonda from '../../assets/eHonda.png'
import chunLi from '../../assets/chunLi.png'
import mario3 from '../../assets/mario3.png'
import megaman from '../../assets/megaman.png'
import sonic from '../../assets/sonic.png'
import zelda from '../../assets/zelda.png'
import tetris from '../../assets/ken.png'

let colours = {
    singles: {},
    animations: {}
}
colours.singles.sonic = {
    key: 'sonic',
    imgSrc: sonic,
    rgbaArray: {}
}
colours.singles.zelda = {
    key: 'zelda',
    imgSrc: zelda,
    rgbaArray: {}
}
colours.singles.megaman = {
    key: 'megaman',
    imgSrc: megaman,
    rgbaArray: {}
}
colours.singles.mario3 = {
    key: 'mario3',
    imgSrc: mario3,
    rgbaArray: {}
}
colours.singles.ken = {
    key: 'ken',
    imgSrc: ken,
    rgbaArray: {}
}
colours.singles.ryu = {
    key: 'ryu',
    imgSrc: ryu,
    rgbaArray: {}
}
colours.singles.chunLi = {
    key: 'chunLi',
    imgSrc: chunLi,
    rgbaArray: {}
}
colours.singles.eHonda = {
    key: 'eHonda',
    imgSrc: eHonda,
    rgbaArray: {}
}

/* colours.animations.backDrops =
    [
        {
            imgSrc: ken,
            rgbaArray: colours.singles.ken.imgSrc,
            goTo: {
                position: 'next',
                loopCount: null
            },
            label: 'start',
            delay: 0,
            duration: 0
        },
        {
            imgSrc: ken,
            rgbaArray: colours.singles.ken.imgSrc,
            goTo: {
                position: 'next'
            },
            label: null,
            delay: 2,
            duration: 2
        },
        {
            imgSrc: chunLi,
            rgbaArray: colours.singles.chunLi.imgSrc,
            goTo: {
                position: 'start'
                loop: 1
            },
            label: null,
            delay: 2,
            duration: 2
        },
        {
            imgSrc: eHonda,
            rgbaArray: colours.singles +.eHonda.imgSrc,
            goTo: null,
            label: null,
            delay: 2,
            duration: 2
        }
    ] */

// getPixels(imgs.ken.imgSrc, function(err, pixels) { console.log ('pixels', pixels) })

const reverseArray = (array) => {
    let reversedArray = []

    for (let x= array.shape[1]; x >= 0; x--){
        for (let z= 0; z < array.shape[0]; z++) {
            reversedArray.push(...array.data.slice(array.index(z,x,0),  array.index(z,x,0) + array.shape[2]))
        }
    }
    console.log (array)
    return reversedArray
}

const normaliseArray = (array) => {
    for (let x = 0; x < array.shape[0]; x++){
        for (let z = 0; z < array.shape[1]; z++) {
            for (let rgba = 0; rgba < array.shape[2]; rgba++) {
                const currentVal = array.get(x,z,rgba)
                array.set(x,z,rgba,currentVal / 255)
            }
        }
    }
}

Object.keys(colours.singles).forEach( ( img, i ) => {
    getPixels( colours.singles[img].imgSrc, function ( err, pixels ) {
        pixels.data = reverseArray(pixels)
        normaliseArray(pixels)
        colours.singles[img].rgbaArray = pixels

    } )
} )





// console.log('rgba', colours.singles[0].rgbaArray.data.slice(colours.singles[0].rgbaArray.data.index(3,0,0),  colours.singles[0].rgbaArray.data.index(3,0,0) + 4))

// console.log("got pixels", pixels)
// console.log('rgba', pixels.data.slice(pixels.index(3,0,0),  pixels.index(3,0,0) + 4))

export default colours