"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QuestionAnswer } from "../types";
import { useState } from "react";
import { toast } from "sonner";
import { useAppDispatch } from "./Redux/hooks";
import { editQuestion } from "./Redux/QuestionsSlice";

export function DialogDemo({ data }: { data: QuestionAnswer }) {
  const [isopen,setIsOpen] =useState(false)
  const dispatch = useAppDispatch();
  const [QuValue, setQuSetValue] = useState<string>(data.question);
  const [AnswerValue, setAnswerValue] = useState<string>(data.answer);
  const handleEditQuestionAnswer = () => {
    if (data.question === QuValue && data.answer === AnswerValue) {
      toast.error("يجب عليك تغيير محتوي السؤال او الاجابه");
      return;
    }
    const newValues: QuestionAnswer = {
      id: data.id,
      question: QuValue,
      answer: AnswerValue,
    };
    dispatch(editQuestion(newValues));
    toast.success("تم التعديل ")
  };
  return (
    <Dialog >
      <form>
        <DialogTrigger asChild>
          <Button>تعديل</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>تعديل السؤال والاجابه</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">تعديل السؤال</Label>
              <Input
                id="name-1"
                name="name"
                value={QuValue}
                onChange={(e) => setQuSetValue(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">تعديل الاجابه</Label>
              <Input
                id="username-1"
                name="username"
                value={AnswerValue}
                onChange={(e) => setAnswerValue(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">الغاء</Button>
            </DialogClose>
            <Button type="submit" onClick={handleEditQuestionAnswer}>
              حفظ التغييرات
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
