import { createSlice } from "@reduxjs/toolkit";
import { vocabularyApi, WordEntry } from "../api/vocabulary.api";

interface VocabularyState {
  words: WordEntry[];
}

const initialState: VocabularyState = {
  words: [],
};

const vocabularySlice = createSlice({
  name: "vocabulary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      vocabularyApi.endpoints.getAllwords.matchFulfilled,
      (state, action) => {
        console.log(action.payload.data);
        state.words = action.payload.data;
      }
    );
  },
});

export default vocabularySlice.reducer;
