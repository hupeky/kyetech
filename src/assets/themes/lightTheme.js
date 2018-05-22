import globalCustomisation from './globalCustomisation/globalCustomisation'
import {createMuiTheme} from '@material-ui/core/styles'

const lightTheme = createMuiTheme( {
    ...globalCustomisation,
    palette: {
        ...globalCustomisation.palette,
        type: 'light' // Switching the dark mode on is a single property value change.
    },
    overrides: {
        ...globalCustomisation.overrides,
        MuiCard: {
            root: {
                position: 'relative',
                display: 'flex',
                width: '95%',
                margin: '20px auto'
            }

        },
        MuiCardHeader: {
            root: {

                paddingTop: '4px',
                paddingBottom: '4px',
                paddingLeft: '4px',
                paddingRight: '4px'
            },
            title: {
                color:'white',
                fontSize: '1.1em'
            }
        },
        MuiAvatar: {
            root: {
                width: '30px',
                height: '30px'
            },
            colorDefault: {
                color:'black'
            },
            img: {
                boxSizing: 'border-box',
                backgroundColor:'white',
                padding: '2px'
            }
        }
    }
}
)

export default lightTheme