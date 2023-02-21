import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthToken, removeAuthToken } from '../utils/auth';

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logoutSuccess } = userSlice.actions;

export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;
export const selectError = (state) => state.user.error;

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', { email, password });
    const { user, token } = response.data;
    setAuthToken(token);
    dispatch(loginSuccess({ user, token }));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    removeAuthToken();
    dispatch(logoutSuccess());
  } catch (error) {
    console.log(error);
  }
};

const userReducer = userSlice.reducer;

export default userReducer;
