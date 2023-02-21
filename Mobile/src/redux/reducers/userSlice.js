import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../utils/axios";

const initialState = {
  user: null,
  isLogged: false,
  verificationPending: false,
};

export const signupUser = createAsyncThunk(
  "user/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("auth/signup", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signinUser = createAsyncThunk(
  "user/signin",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("auth/signin", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyUser = createAsyncThunk(
  "user/verify",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(`auth/confirmCode/${token}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
