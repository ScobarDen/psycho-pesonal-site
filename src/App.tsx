import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './redux/hooks';
import { darkMode, lightMode } from './theme';
import { selectTheme, setThemeMode, Theme } from './redux/theme';
import { AdminLayout, UsersLayout } from './layouts';
import Header from './components/ui/Header';
import { MyRouter } from './MyRouter';
import { Container } from '@mui/material';

function App() {
  const dispatch = useAppDispatch();
  const mode = useSelector(selectTheme);
  useEffect(() => {
    const themeMode = (localStorage.getItem('mode') as Theme) || Theme.LIGHT;
    dispatch(setThemeMode(themeMode));
  }, []);

  return (
    <ThemeProvider theme={mode === Theme.LIGHT ? lightMode : darkMode}>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <MyRouter />
      </Container>
    </ThemeProvider>
  );
}

export default App;
