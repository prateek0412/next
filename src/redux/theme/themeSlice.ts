// src/redux/themeSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = true;
    },
    toggleLightMode: (state) => {
      state.isDarkMode = false;
    },
  },
});

export const { toggleDarkMode, toggleLightMode } = themeSlice.actions;
export default themeSlice.reducer;