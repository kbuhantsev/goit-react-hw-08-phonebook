import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const rejected = state => {
  state.user = { name: null, email: null };
  state.isLoggedIn = false;
  state.token = null;
};

const fulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        fulfilled(state, action);
      })
      .addCase(logOut.fulfilled, state => {
        rejected(state);
      })
      .addCase(register.fulfilled, (state, action) => {
        fulfilled(state, action);
      })
      .addCase(register.rejected, state => {
        rejected(state);
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })

      .addMatcher(isRejectedAction, state => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
        state.token = null;
      });
  },
});

export const authReduser = authSlice.reducer;
