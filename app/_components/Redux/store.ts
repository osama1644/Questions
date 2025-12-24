import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./QuestionsSlice";
export const store =configureStore({
  reducer:{
    Questions:questionsSlice
  }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;