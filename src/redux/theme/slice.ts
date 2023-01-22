import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme, ThemeState } from './types';

const initialState: ThemeState = {
  mode: Theme.LIGHT,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleThemeMode(state) {
      state.mode = state.mode === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      localStorage.setItem('theme', state.mode);
    },
    setThemeMode(state, action: PayloadAction<Theme>) {
      state.mode = action.payload;
      localStorage.setItem('theme', state.mode);
    },
  },
});

export const { toggleThemeMode, setThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
