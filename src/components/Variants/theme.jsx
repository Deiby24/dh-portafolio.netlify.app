import { createTheme } from "@mui/material";

const {breakpoints} = createTheme({
    
})

export const theme = createTheme({
    components:{
        MuiTypography:{
            variants:[
                {
                    props:{variant:'subtitle'},
                    style:{
                        fontFamily:'Oswald, sans-serif',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '2rem',
                        textShadow: '5px 5px 5px #0a0a0a'
                    }
                },
                {
                    props:{variant:'namePy'},
                    style:{
                        fontFamily:'Oswald, sans-serif',
                        fontSize: '1.5rem',
                        color: 'white'
                    }
                },
            ]
        },
        MuiButton:{
            variants:[
                {
                    props:{variant:'ButtonPy'},
                    style:{
                        fontFamily:'Oswald, sans-serif',
                        color:'#ffffff',
                        background:'#18181B',
                        borderRadius: '8px',
                        '&:hover':{
                            background:'#626262'
                        }
                    }
                }
            ]
        }
    }
})
