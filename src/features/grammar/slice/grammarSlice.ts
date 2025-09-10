import { createSlice } from "@reduxjs/toolkit";
import { grammarApi } from "../api/grammar.api";

export type GrammarData = {
  title: string;
  description: string;
  examples?: string;
  usage?: string;
  level: string;
  id: string;
};

type InitialState = {
  data: GrammarData[];
};

const initialState: InitialState = {
  data: [],
};

const grammarSlice = createSlice({
  name: "grammar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      grammarApi.endpoints.getAllGrammar.matchFulfilled,
      (state, action) => {
        state.data = action.payload;
      }
    );
  },
});

export default grammarSlice.reducer;
