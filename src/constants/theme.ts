import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#2D929F'
      },
      secondary: {
        main: '#43CBA1'
      },
      text: {
        primary: '#404041',
        secondary: '#FFFFFF',
        disabled: '#CFD1D2', 
      },
      info: {
        main: '#A5A7AA'
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    
  });