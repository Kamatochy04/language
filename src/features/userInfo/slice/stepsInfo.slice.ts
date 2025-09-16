import { createSlice } from "@reduxjs/toolkit";

interface StepsInfo {
  currentStep: number;
}

const initialState: StepsInfo = {
  currentStep: 0,
};

const StepsInfoSlice = createSlice({
  name: "stepInfo",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
  },
});

export const { nextStep, prevStep } = StepsInfoSlice.actions;
export default StepsInfoSlice.reducer;
