import { createSlice } from "@reduxjs/toolkit";

type AuthSliceType = {
  accessToken?: string;
  user?: {
    id: number;
    name: string;
  };
};

const getInitialAuthState = (): AuthSliceType => {
  if (typeof window !== "undefined") {
    const authString = localStorage.getItem("auth");
    try {
      return authString ? JSON.parse(authString) : {}; 
    } catch (error) {
      console.error("Auth localStorage parsing error:", error);
      return {}; 
    }
  }
  return {}; 
};

const initialState: AuthSliceType = getInitialAuthState();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("auth", JSON.stringify(payload)); 
      }
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    },
    logout: (state) => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth");
      }
      state.accessToken = undefined; 
      state.user = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
