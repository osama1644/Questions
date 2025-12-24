"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { useAppDispatch } from "./Redux/hooks";
import { addQuestion } from "./Redux/QuestionsSlice";

function CreateQuestions() {
    const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const dispatch = useAppDispatch();
  const createQuestionHandler = () => {
    if (!question || !answer) {
      toast.error("يرجى ملء كلا الحقلين قبل الإضافة.");
      return;
    }
    const newQuestion = { question, answer ,id:Date.now()};
    toast.success("تمت إضافة السؤال بنجاح!");
    setQuestion("");
    setAnswer("");
    dispatch(addQuestion(newQuestion));
  };
  return (
    <div className="mt-10 mx-auto flex flex-col gap-5 
                    w-full sm:w-4/5 md:w-1/2 lg:w-1/3
                    rounded-2xl bg-white p-6 shadow-md">
      
      <Input
        placeholder="اكتب سؤالك هنا"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="h-12 text-right text-base placeholder:text-gray-400"
      />

      <Input
        placeholder="اكتب إجابتك هنا"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="h-12 text-right text-base placeholder:text-gray-400"
      />

      <Button
        className="mt-2 h-12 w-full bg-[#b4acc6] text-white 
                   font-semibold transition-colors
                   hover:bg-[#9e95b3] cursor-pointer"
        onClick={createQuestionHandler}  
      >
        إضافة السؤال
      </Button>
    </div>
  );
}

export default CreateQuestions;
