let globalCustomisation = {

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
            main: '#e3e3e3',
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
            }
        },
        MuiCard: {
            root: {
                position:'relative',
                display: 'flex',
                width: '95%',
                margin:'20px auto',
                // [theme.breakpoints.down( 'sm' )]: {flexDirection: 'column'}
            }

        },
        MuiCardHeader: {
        },
        MuiTypography: {
            body1: {
                textAlign: 'left',
                marginBottom: '20px',
                marginTop: '10px',
                opacity: 0.8
            },
            headline: {
                opacity: 0.6,
                fontWeight: 500,
                textAlign:'left'
            }
        },
        MuiListItemText: {
            root: {padding: 0},
            primary: {
                fontSize: "0.875rem",
                fontWeight: 400,
                marginBottom: 0,
                lineHeight: "1.46429em",
                opacity: 0.8
            }
        },
        MuiListItemIcon: {
            root: {
                marginLeft: '20px',
                width: '15px',
                height: '15px'
            }

        },
        MuiListItem: {
            default: {
                paddingTop: '0px',
                paddingBottom: '6px'
            }
        }
    }

}

export default globalCustomisation