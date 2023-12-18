import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  isAuthenticated: boolean;
}

const initialState: InitialState = {
  isAuthenticated: true,
  // Other relevant authentication-related state here
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      // Handle other login-related state changes if needed
    },
    logout(state) {
      state.isAuthenticated = false;
      // Handle other logout-related state changes if needed
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
