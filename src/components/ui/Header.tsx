import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Avatar,
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
import {
  selectNavFields,
  setAuthNavMenu,
  setAuthUserMenu,
  setNavValue,
  setNotAuthNavMenu,
  setNotAuthUserMenu,
} from '../../redux/navFields';

const Header: React.FC = () => {
  const isAuth = false; // todo: Должно потом быть с бэка
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (isAuth) {
      dispatch(setAuthNavMenu());
      dispatch(setAuthUserMenu());
    } else {
      dispatch(setNotAuthNavMenu());
      dispatch(setNotAuthUserMenu());
    }
  }, [isAuth]);

  const { navValue, userMenu, navMenu } = useSelector(selectNavFields);
  const mode = useSelector(selectTheme);
  const dispatch = useAppDispatch();

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    dispatch(setNavValue(newValue));
  };
  const handleToggleTheme = () => {
    dispatch(toggleThemeMode());
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChangeMenuItem = (newValue: number) => {
    handleCloseNavMenu();
    setNavValue(newValue);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <PsychologyIcon sx={{ marginRight: 1, display: { xs: 'none', lg: 'block' } }} />
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
            {navMenu.map((tab, index) => (
              <MenuItem key={tab.id} onClick={() => handleChangeMenuItem(index)}>
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
          {navMenu.map((tab) => (
            <Tab key={tab.id} label={tab.label} />
          ))}
        </Tabs>
        <IconButton
          onClick={handleToggleTheme}
          edge="start"
          color="inherit"
          aria-label="theme"
          sx={{ marginLeft: 0.5 }}>
          {mode === Theme.LIGHT ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        <Box>
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
          <Menu
            id="menu-appbar"
            sx={{ marginTop: 5 }}
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            {userMenu.map((field) => (
              <MenuItem key={field.id} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{field.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
