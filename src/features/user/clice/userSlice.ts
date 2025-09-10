import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerApi } from "../api/user.api";

type RegisterData = {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
};

type InitialState = {
  user: RegisterData;
  token: string;
  isAuth: boolean;
};

const initialState: InitialState = {
  user: {
    email: "",
    name: "",
    password: "",
    repeatPassword: "",
  },
  token: "",
  isAuth: false,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<RegisterData>) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
      state.user.repeatPassword = action.payload.repeatPassword;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      registerApi.endpoints.register.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token;
        state.isAuth = true;
        state.user = initialState.user;
      }
    );
  },
});

export const { setUserData } = registerSlice.actions;
export default registerSlice.reducer;
