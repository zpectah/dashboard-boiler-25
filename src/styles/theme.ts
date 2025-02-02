import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {},
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '-.025em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.45rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.3rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.15rem',
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 300,
    },
    subtitle2: {
      fontWeight: 300,
    },
    body2: {
      fontSize: '.85rem',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        html: {
          fontSize: '15px',
        },
        body: {
          fontSize: '1rem',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
      }),
    },
  },
});

export default theme;
