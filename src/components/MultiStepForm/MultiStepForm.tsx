import React, { useEffect, useState } from "react";
import InputRadio from "../lib/InputRadio/InputRadio";
import InputRadioWithImage from "../lib/InputRadioWithImage/InputRadioWithImage";
import Textarea from "../lib/Textarea/Textarea";
import QuestionLabel from "../QuestionLabel/QuestionLabel";
import questionsData399 from "../../api/questions/399-questions.json";
import questionsData262 from "../../api/questions//262-questions.json";
import "./MultiStepForm.scss";
import { IQuestion } from "../../interfaces/questions/question";

interface IMultiStepFormProps {
  formStep: number;
  serviceId: number;
}

const MultiStepForm: React.FC<IMultiStepFormProps> = (
  props: IMultiStepFormProps
) => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const getQuestions = () => {
    if (props.serviceId === 399) {
      setQuestions(questionsData399);
    } else if (props.serviceId === 262) {
      setQuestions(questionsData262);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  console.log(questions, "qusetion");

  return (
    <div className="multi_step_form">
      <QuestionLabel />
      <form>
        {props.formStep === 0 && (
          <section>
            <InputRadioWithImage />
          </section>
        )}
        {props.formStep === 1 && (
          <section>
            <InputRadio />
          </section>
        )}
        {props.formStep === 2 && (
          <section>
            <Textarea />
          </section>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
