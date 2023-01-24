import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NavFields } from './types';

const initialState: NavFields = {
  navValue: 0,
  navMenu: [
    { id: 1, label: 'Обо мне', path: '/' },
    { id: 2, label: 'Онлайн запись', path: '/online' },
    { id: 3, label: 'Личный прием', path: '/offline' },
    { id: 4, label: 'Статьи', path: '/posts' },
  ],
  userMenu: [
    { id: 1, label: 'Войти', path: '/login' },
    { id: 2, label: 'Зарегистрироваться', path: '/register' },
  ],
};

export const navFieldsSlice = createSlice({
  name: 'navFields',
  initialState,
  reducers: {
    setAuthNavMenu(state) {
      state.navMenu = [
        { id: 1, label: 'Обо мне', path: '/' },
        { id: 2, label: 'Онлайн запись', path: '/online' },
        { id: 3, label: 'Личный прием', path: '/offline' },
        { id: 4, label: 'Статьи', path: '/posts' },
        { id: 5, label: 'Личный кабинет', path: '/me' },
      ];
    },
    setNotAuthNavMenu(state) {
      state.navMenu = [
        { id: 1, label: 'Обо мне', path: '/' },
        { id: 2, label: 'Онлайн запись', path: '/online' },
        { id: 3, label: 'Личный прием', path: '/offline' },
        { id: 4, label: 'Статьи', path: '/posts' },
      ];
    },
    setAuthUserMenu(state) {
      state.userMenu = [{ id: 1, label: 'Выйти', path: '/' }];
    },
    setNotAuthUserMenu(state) {
      state.userMenu = [
        { id: 1, label: 'Войти', path: '/login' },
        { id: 2, label: 'Зарегистрироваться', path: '/register' },
      ];
    },
    setNavValue(state, action: PayloadAction<number>) {
      state.navValue = action.payload;
    },
  },
});

export const {
  setAuthUserMenu,
  setNotAuthUserMenu,
  setNotAuthNavMenu,
  setAuthNavMenu,
  setNavValue,
} = navFieldsSlice.actions;

export default navFieldsSlice.reducer;
