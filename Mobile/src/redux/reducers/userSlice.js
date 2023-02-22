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
      const err = { err: error.response.data };
      return err;
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
      const err = { err: error.response.data };
      return err;
    }
  }
);

export const verifyUser = createAsyncThunk(
  "user/verify",
  async ({ token, pin }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `auth/confirmCode/${token}`,
        { pin },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//resend
export const resendCode = createAsyncThunk(
  "user/resend",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `auth/resendCode/${token}`,
        {token},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLogged = false;
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, action) => {
      state.verificationPending = true;
      state.user = action.payload;
      state.isLogged = false;
    },
    [signupUser.rejected]: (state, action) => {
      state.verificationPending = false;
      state.error = action.payload;
    },
    [signinUser.fulfilled]: (state, action) => {
      state.verificationPending = false;
      state.user = action.payload;
      state.isLogged = true;
    },
    [signinUser.rejected]: (state, action) => {
      state.verificationPending = false;
      state.error = action.payload;
    },
    [verifyUser.fulfilled]: (state, action) => {
      state.verificationPending = false;
      state.user = action.payload;
      state.isLogged = false;
    },
    [verifyUser.rejected]: (state, action) => {
      state.verificationPending = false;
      state.error = action.payload;
    },
    [resendCode.fulfilled]: (state, action) => {
      state.verificationPending = false;
      state.user = action.payload;
      state.isLogged = false;
    },
    [resendCode.rejected]: (state, action) => {
      state.verificationPending = true;
      state.error = action.payload;
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
