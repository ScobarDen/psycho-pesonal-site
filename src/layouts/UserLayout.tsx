import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/ui/Header';
import { Container } from '@mui/material';

export const UsersLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
