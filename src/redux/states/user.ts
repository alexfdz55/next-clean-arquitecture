import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../domain/models';

export const UserEmptyState: User = {
  id: 0,
  name: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: UserEmptyState,
  reducers: {
    login: (state, action): any => action.payload,
    modifyUser: (state, action) => ({ ...state, ...action.payload }),
    logout: () => UserEmptyState
  }
});

export const { login, modifyUser, logout } = userSlice.actions;

export default userSlice.reducer;
