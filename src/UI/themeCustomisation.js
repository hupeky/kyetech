let themeCustomisation = {

    typography: {
        display3: {
            fontWeight: 500,
            textAlign: 'center'
        }
    },
    palette: {
        primary: {
            main: '#00A2A2'
        },
        secondary: {
            main: '#D9004A'
        },
        grey: {
            main: '#E9E9E9',
            light: 'fff',
            dark: '#A4A4A4'
        }
    },
    overrides: {
        MuiPaper: { // Name of the component ⚛️ / style shee
            root: { // Name of the rule
                width: '100%',
                backgroundColor: 'none',
                position: 'relative'
            },
        },
        MuiTypography: {
            body1: {
                textAlign: 'left',
                marginBottom: '30px',
                opacity: 0.8
            }
        }
    }

}

export default themeCustomisation