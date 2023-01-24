import React from 'react';
import { Route, Routes } from "react-router-dom";
import { AdminLayout, UsersLayout } from './layouts';
import { NotFound } from "./pages/NotFound";

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
        element={<NotFound/>}
      />
    </Routes>
  );
};
