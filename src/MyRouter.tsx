import React from 'react';
import { Route, Routes } from "react-router-dom";
import { AdminLayout, AuthenticationLayout, UsersLayout } from "./layouts";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";

export const MyRouter: React.FC = () => {
  const isAdmin = false; // todo: сделать получение этого значения с бэкенда
  return (
    <Routes>
      {isAdmin ? (
        <Route path="/admin" element={<AdminLayout />}></Route>
      ) : (
        <Route path="/" element={<UsersLayout />}></Route>
      )}
      <Route path="/auth" element={<AuthenticationLayout/>}>
        <Route path="login" element={<LoginPage/>}/>
      </Route>
      <Route
        path="*"
        element={<NotFoundPage/>}
      />
    </Routes>
  );
};
