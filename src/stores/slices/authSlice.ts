import {createSlice} from '@reduxjs/toolkit';

const initialState: {
  token: string | undefined;
  isAuthenticated: boolean;
} = {
  token: undefined,
  isAuthenticated: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      //   state.token = action.payload?.token;
      state.isAuthenticated = true;
    },
    logout: state => {
      //   state.token = undefined;
      state.isAuthenticated = false;
    },
  },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
