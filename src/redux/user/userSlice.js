import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const registerFulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const logInFulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const rejectedReducer = state => {
  state.user = { name: null, email: null };
  state.isLoggedIn = false;
  state.token = null;
};

const refreshUserPendingReducer = state => {
  state.isRefreshing = true;
};

const refreshUserFulfilledReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const refreshUserRejectedReducer = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logIn.fulfilled, logInFulfilledReducer)
      .addCase(logOut.fulfilled, rejectedReducer)
      .addCase(register.fulfilled, registerFulfilledReducer)
      .addCase(register.rejected, rejectedReducer)
      .addCase(refreshUser.pending, refreshUserPendingReducer)
      .addCase(refreshUser.fulfilled, refreshUserFulfilledReducer)
      .addCase(refreshUser.rejected, refreshUserRejectedReducer);
  },
});

export const authReduser = authSlice.reducer;
