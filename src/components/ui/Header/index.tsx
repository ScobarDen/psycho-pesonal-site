import React, { useState } from 'react';
import { AppBar, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { useSelector } from 'react-redux';
import { selectTheme, Theme, toggleThemeMode } from '../../../redux/theme';
import { useAppDispatch } from '../../../redux/hooks';
import styles from './Header.module.scss';

export type PathType = `/${string}`;

type NavFieldType = {
  id: number;
  label: string;
  path: PathType;
};

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
  const navBarFields: NavFieldType[] = [
    { id: 1, label: 'Обо мне', path: '/' },
    { id: 2, label: 'Онлайн запись', path: '/online' },
    { id: 3, label: 'Личный прием', path: '/offline' },
    { id: 4, label: 'Статьи', path: '/posts' },
    { id: 5, label: 'Войти/Регистрация', path: '/auth' },
  ];

  return (
    <AppBar position="fixed">
      <Toolbar>
        <PsychologyIcon />
        <Typography variant="h6" className={styles.title}>
          DAVAR
        </Typography>
        <Tabs value={value} onChange={handleChangeTab}>
          {navBarFields.map((tab) => (
            <Tab key={tab.id} label={tab.label} />
          ))}
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
  );
};

export default Header;
