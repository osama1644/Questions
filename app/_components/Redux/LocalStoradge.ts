import { QuestionAnswer } from "@/app/types";

const STORAGE_KEY = "questions";

export const getInitialQuestions = (): QuestionAnswer[] => {
  if (typeof window === "undefined") return [];

  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveQuestions = (questions: QuestionAnswer[]) => {
  if (typeof window === "undefined") return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
};
