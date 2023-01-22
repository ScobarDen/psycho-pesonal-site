import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.scss';
import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

const Header = () => {
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
