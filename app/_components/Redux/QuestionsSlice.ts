import { QuestionAnswer } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getInitialQuestions, saveQuestions } from "./LocalStoradge";

interface QuestionsState {
  questions: QuestionAnswer[];
}

const initialState: QuestionsState = {
  questions: getInitialQuestions(),
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<QuestionAnswer>) => {
      state.questions.push(action.payload);
      saveQuestions(state.questions)
    },
    removeQuestion: (state, action: PayloadAction<number>) => {
      state.questions = state.questions.filter(
        (question) => question.id !== action.payload
      );
      saveQuestions(state.questions)
    },
    removeAllQusetions:(state)=>{
      state.questions =[]
      saveQuestions(state.questions)
    }
  },
});

export const { addQuestion, removeQuestion,removeAllQusetions } = questionsSlice.actions;
export default questionsSlice.reducer;
