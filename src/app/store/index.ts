import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

import userSlice from "@/features/user/clice/userSlice";
import grammarSlice from "@/features/grammar/slice/grammarSlice";
import vocabularySlice from "@/features/vocabulary/slice/vocabularySlice";
import { userInfoStepsSlice, StepsInfoSlice } from "@/features";

export const store = configureStore({
  reducer: {
    userSlice,
    vocabularySlice,
    grammarSlice,
    userInfoStepsSlice,
    StepsInfoSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
