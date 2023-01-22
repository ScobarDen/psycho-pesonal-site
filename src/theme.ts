import { createTheme } from '@mui/material';

export const lightMode = createTheme({
  palette: {
    primary: {
      main: '#0097a7',
    },
    secondary: {
      main: '#ff5722',
    },
    mode: 'light',
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 400,
    },
    h3: {
      fontWeight: 300,
    },
    h4: {
      fontWeight: 200,
    },
    h5: {
      fontWeight: 100,
    },
    h6: {
      fontWeight: 50,
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#fafafa',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#fafafa',
        },
      },
    },
  },
});

export const darkMode = createTheme({
  palette: {
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#f44336',
    },
    mode: 'dark',
    background: {
      default: '#303030',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontWeight: 500,
      color: '#fafafa',
    },
    h2: {
      fontWeight: 400,
      color: '#fafafa',
    },
    h3: {
      fontWeight: 300,
      color: '#fafafa',
    },
    h4: {
      fontWeight: 200,
      color: '#fafafa',
    },
    h5: {
      fontWeight: 100,
      color: '#fafafa',
    },
    h6: {
      fontWeight: 50,
      color: '#fafafa',
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#fafafa',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#fafafa',
        },
      },
    },
  },
});
