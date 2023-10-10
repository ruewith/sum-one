import { configureStore } from '@reduxjs/toolkit';

import user from './userSlice';

export const store = configureStore({
  reducer: {
    user,
  },
});

export const userSecletor = (state) => state.user.currentUser;
export const authSecletor = (state) => state.user.isAuth;
