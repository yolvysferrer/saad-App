import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "loginState",
  initialState: {
    user: {
      id: "qweas56dxcas354981",
      username: "Freddy Black",
      role: ["contabilidad"],
      toke: "lorem ipsum dolor",
    },
    theme: null,
    // user:null
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
    },
    logOut: (state, action) => {
      console.log(action.payload);
    },
    themeState: (state, action) => {
      state.theme = action.payload
    },
  },
});

export const { login, logOut, themeState } = LoginSlice.actions;

export default LoginSlice.reducer;
