import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RegisterData = {
  username: string;
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
    username: "",
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
      state.user.username = action.payload.username;
      state.user.password = action.payload.password;
      state.user.repeatPassword = action.payload.repeatPassword;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     registerApi.endpoints.register.matchFulfilled,
  //     (state, action) => {
  //       state.token = action.payload.token;
  //       state.isAuth = true;
  //       state.user = initialState.user;
  //     }
  //   );
  // },
});

export const { setUserData } = registerSlice.actions;
export default registerSlice.reducer;
