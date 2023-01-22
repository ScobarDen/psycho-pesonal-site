import React from 'react';
import { Outlet } from 'react-router-dom';

export const UsersLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
