import React, { useState } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { selectTheme, Theme, toggleThemeMode } from '../../redux/theme';
import { useAppDispatch } from '../../redux/hooks';

export type PathType = `/${string}`;

type NavFieldType = {
  id: number;
  label: string;
  path: PathType;
};

const navBarFields: NavFieldType[] = [
  { id: 1, label: 'Обо мне', path: '/' },
  { id: 2, label: 'Онлайн запись', path: '/online' },
  { id: 3, label: 'Личный прием', path: '/offline' },
  { id: 4, label: 'Статьи', path: '/posts' },
  { id: 5, label: 'Войти/Регистрация', path: '/auth' },
];

const Header: React.FC = () => {
  const [navValue, setNavValue] = useState(0);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const mode = useSelector(selectTheme);
  const dispatch = useAppDispatch();

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setNavValue(newValue);
  };
  const handleToggleTheme = () => {
    dispatch(toggleThemeMode());
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <PsychologyIcon sx={{ marginRight: '1rem', display: { xs: 'none', lg: 'block' } }} />
        <Box sx={{ marginRight: '1rem', display: { xs: 'block', lg: 'none' } }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenNavMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', lg: 'none' },
            }}>
            {navBarFields.map((tab) => (
              <MenuItem key={tab.id} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{tab.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          КЛИНИЧЕСКИЙ ПСИХОЛОГ Ася Давар
        </Typography>
        <Tabs
          value={navValue}
          onChange={handleChangeTab}
          sx={{ display: { xs: 'none', lg: 'flex' } }}>
          {navBarFields.map((tab) => (
            <Tab key={tab.id} label={tab.label} />
          ))}
        </Tabs>
        <IconButton onClick={handleToggleTheme} edge="start" color="inherit" aria-label="theme">
          {mode === Theme.LIGHT ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
