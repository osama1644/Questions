"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAppDispatch, useAppSelector } from "./Redux/hooks";
import { Button } from "@/components/ui/button";
import { removeAllQusetions, removeQuestion } from "./Redux/QuestionsSlice";
function Questions() {
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.Questions.questions);
  return (
    <div className="w-full">
      {questions.length === 0 ? (
        <p className="text-center mt-10 text-gray-500">
          لا توجد أسئلة متاحة حالياً.
        </p>
      ) : (
        <div
          className="mt-10 mx-auto flex flex-col gap-5 
                          w-full sm:w-4/5 md:w-1/2 lg:w-1/3"
        >
          {questions.map((qa) => (
            <div
              key={qa.id}
              className="rounded-2xl bg-white p-6 shadow-md mb-10"
            >
              <Accordion type="single" collapsible dir="rtl">
                <AccordionItem value="item-1">
                  <AccordionTrigger>{qa.question}</AccordionTrigger>
                  <AccordionContent className="flex justify-between items-center gap-2 ">
                    {qa.answer}
                    <Button
                      className="cursor-pointer bg-red-200 hover:bg-red-400 transition"
                      onClick={() => dispatch(removeQuestion(qa.id))}
                    >
                      مسح السؤال
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      )}
      {questions.length > 0 && (
        <Button className="w-50 h-auto block mx-auto text-center bg-red-300 text-xl mt-5 cursor-pointer mb-10" onClick={()=>dispatch(removeAllQusetions())}>
          مسح جميع العناصر
        </Button>
      )}
    </div>
  );
}

export default Questions;
