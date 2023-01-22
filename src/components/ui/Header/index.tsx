import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.scss';
import React, { useState } from 'react';
import { AppBar, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.header}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            DAVAR
          </Typography>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Онлайн запись" />
            <Tab label="Личный прем" />
            <Tab label="Обо мне" />
            <Tab label="Статьи" />
            <Tab label="Войти/Регистрация" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
