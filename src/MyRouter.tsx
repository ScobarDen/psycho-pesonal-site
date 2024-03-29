import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AdminLayout, AuthenticationLayout, UsersLayout } from './layouts';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AboutMe } from './pages/AboutMe';

export const MyRouter: React.FC = () => {
  const isAdmin = false; // todo: сделать получение этого значения с бэкенда
  return (
    <Routes>
      {isAdmin ? (
        <Route path="/admin" element={<AdminLayout />}></Route>
      ) : (
        <Route path="/" element={<UsersLayout />}>
          <Route path="" element={<AboutMe />} />
        </Route>
      )}
      <Route path="/auth" element={<AuthenticationLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="/notfound" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to={'/notfound'} />} />
    </Routes>
  );
};
