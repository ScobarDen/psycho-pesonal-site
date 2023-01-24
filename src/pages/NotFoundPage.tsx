import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const location = useLocation();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
      <ErrorOutlineIcon
        sx={{
          fontSize: '10rem',
          color: 'error',
        }}
      />
      <Typography variant="h4" gutterBottom>
        404: Page not found
      </Typography>
      <Typography sx={{marginBottom: 2}} variant="body1">
        The requested page <b>{location.pathname}</b> could not be found.
      </Typography>
      <Link to="/">
        <Button variant="contained" endIcon={<HomeIcon />}>
          Вернуться на главную
        </Button>
      </Link>
    </Box>
  );
};
