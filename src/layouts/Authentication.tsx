import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export const Authentication: React.FC = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
