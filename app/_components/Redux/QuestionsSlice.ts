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
      saveQuestions(state.questions);
    },
    removeQuestion: (state, action: PayloadAction<number>) => {
      state.questions = state.questions.filter(
        (question) => question.id !== action.payload
      );
      saveQuestions(state.questions);
    },
    removeAllQusetions: (state) => {
      state.questions = [];
      saveQuestions(state.questions);
    },
    editQuestion: (state, action: PayloadAction<QuestionAnswer>) => {
      const findedQuestion = state.questions.find(
        (qu) => qu.id === action.payload.id
      );
      if (findedQuestion) {
        findedQuestion.question = action.payload.question;
        findedQuestion.answer = action.payload.answer;
        saveQuestions(state.questions)
      }
    },
  },
});

export const { addQuestion, removeQuestion, removeAllQusetions, editQuestion } =
  questionsSlice.actions;
export default questionsSlice.reducer;
