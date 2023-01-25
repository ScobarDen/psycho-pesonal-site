import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from '../components/ui/Header';
import { useAppDispatch } from '../redux/hooks';
import { setSignNavMenu } from "../redux/navFields";

export const AuthenticationLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setSignNavMenu());
  });

  return (
    <>
      <Header />
      <Container
        maxWidth="sm"
        sx={{ display: 'flex', justifyContent: 'center', marginTop: 10}}>
        <Outlet />
      </Container>
    </>
  );
};
