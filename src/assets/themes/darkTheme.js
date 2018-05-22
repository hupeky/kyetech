import globalCustomisation from './globalCustomisation/globalCustomisation'
import {createMuiTheme} from '@material-ui/core/styles'

const darkTheme = createMuiTheme( {

    ...globalCustomisation,
    palette: {
        ...globalCustomisation.palette,
        type: 'dark', // Switching the dark mode on is a single property value change.
    }
} )

export default darkTheme