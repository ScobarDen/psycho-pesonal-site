import React, { useState } from 'react';
import { AppBar, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useSelector } from 'react-redux';
import { selectTheme, Theme, toggleThemeMode } from '../../../redux/theme';
import { useAppDispatch } from '../../../redux/hooks';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [value, setValue] = useState(0);
  const mode = useSelector(selectTheme);
  const dispatch = useAppDispatch();
  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleToggleTheme = () => {
    dispatch(toggleThemeMode());
  };

  return (
    <div className={styles.header}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            DAVAR
          </Typography>
          <Tabs value={value} onChange={handleChangeTab}>
            <Tab label="Онлайн запись" />
            <Tab label="Личный прем" />
            <Tab label="Обо мне" />
            <Tab label="Статьи" />
            <Tab label="Войти/Регистрация" />
          </Tabs>
          <IconButton
            onClick={handleToggleTheme}
            edge="start"
            className={styles.themeButton}
            color="inherit"
            aria-label="menu">
            {mode === Theme.LIGHT ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
