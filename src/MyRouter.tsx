import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout, UsersLayout } from './layouts';
import { Box, Paper, Typography } from '@mui/material';

export const MyRouter: React.FC = () => {
  const isAdmin = false; // todo: сделать получение этого значения с бэкенда
  return (
    <Routes>
      {isAdmin ? (
        <Route path="/admin" element={<AdminLayout />}></Route>
      ) : (
        <Route path="/" element={<UsersLayout />}></Route>
      )}
      <Route
        path="*"
        element={
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
            <Paper elevation={10} sx={{ p: 10 }}>
              <Typography>Страница не найдена</Typography>
            </Paper>
          </Box>
        }
      />
    </Routes>
  );
};
