import bounce from '../../../../assets/waves/bounce.png'
import saw from '../../../../assets/waves/saw.png'
import step from '../../../../assets/waves/step.png'
import wave from '../../../../assets/waves/wave.png'

const waveShapes = [
    {
        img: wave,
        title: 'Wave',
        key: 'wave',
        toolTip: 'Smooth wave (Click a 3d cube)'
    },
    {
        img: step,
        title: 'Step',
        key: 'step',
        toolTip: 'Step wave (Click a 3d cube)'
    },
    {
        img: bounce,
        title: 'Bounce',
        key: 'bounce',
        toolTip: 'Bounce wave (Click a 3d cube)'
    },
    {
        img: saw,
        title: 'Saw',
        key: 'saw',
        toolTip: 'Saw wave (Click a 3d cube)'
    }
]

export default waveShapes
