import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormData {
  age: string;
  englishLevel: string;
  timePerDay: string;
  favoriteTopics: string[];
}

const initialState: FormData = {
  age: "",
  englishLevel: "",
  timePerDay: "",
  favoriteTopics: [],
};

const userInfoSteps = createSlice({
  name: "register",
  initialState,
  reducers: {
    setStepsData: (state, action: PayloadAction<Partial<FormData>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setStepsData } = userInfoSteps.actions;
export default userInfoSteps.reducer;
