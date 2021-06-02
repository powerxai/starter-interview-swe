import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export enum LoginStatus {
    LOGGED_IN,
    LOGGED_OUT
}

export type AuthState = {
  username: string;
  status: LoginStatus.LOGGED_IN
} | {
    status: LoginStatus.LOGGED_OUT
}

const initialState = {
  status: LoginStatus.LOGGED_OUT
} as AuthState;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{username: string}>) => {
      return {
          status: LoginStatus.LOGGED_IN,
          username:action.payload.username
      }
    },
    logout: (state) => ({status: LoginStatus.LOGGED_OUT})
  }
});

export const { login, logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;