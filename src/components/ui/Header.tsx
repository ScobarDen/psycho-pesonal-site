import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Container,
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
  setSignNavMenu,
} from '../../redux/navFields';
import { Link } from 'react-router-dom';

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
      // dispatch(setSignNavMenu());
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
      <Container maxWidth="xl">
        <Toolbar>
          <PsychologyIcon sx={{ marginRight: 1, display: { xs: 'none', lg: 'block' } }} />
          <Box sx={{ marginRight: '1rem', display: { xs: 'block', lg: 'none' } }}>
            {navMenu.length !== 0 && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>
            )}
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
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              КЛИНИЧЕСКИЙ ПСИХОЛОГ Ася Давар
            </Link>
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
              <Avatar alt="user" src="" />
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
                <Link
                  key={field.id}
                  to={field.path}
                  style={{ color: 'inherit', textDecoration: 'none' }}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{field.label}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
