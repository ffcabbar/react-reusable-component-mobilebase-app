import React, { useEffect, useState } from "react";
import InputRadio from "../lib/InputRadio/InputRadio";
import InputRadioWithImage from "../lib/InputRadioWithImage/InputRadioWithImage";
import Textarea from "../lib/Textarea/Textarea";
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
  const [form, setForm] = useState({
    radiowithimage: "",
    radio: "",
    radio2: "",
    text: "",
  });

  const getQuestions = () => {
    if (props.serviceId === 399 && props.formStep) {
      const question = questionsData399.filter(
        (item) => item.pageNumber === props.formStep
      );
      setQuestions(question);
    } else if (props.serviceId === 262 && props.formStep) {
      const question = questionsData262.filter(
        (item) => item.pageNumber === props.formStep
      );
      setQuestions(question);
    }
  };

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.formStep]);

  const updateForm = (e: any) => {
    if (e.target.value !== "" && e.target.value !== undefined) {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  // console.log(questions, " question");
  console.log(form, " form");

  return (
    <div className="multi_step_form">
      <form>
        {questions.map((question) => {
          return (
            <div key={question.id}>
              <div className="question_label">{question.label}</div>
              {
                <section>
                  {
                    <div>
                      {question.typeId === 5 &&
                        question.values?.map((item) => {
                          return (
                            <InputRadioWithImage
                              key={item.id}
                              src={item.valueImageUrl}
                              name="radiowithimage"
                              value={form.radiowithimage}
                              onClick={(e) => updateForm(e)}
                              checked={form.radiowithimage === item.value}
                            >
                              {item.value}
                            </InputRadioWithImage>
                          );
                        })}
                    </div>
                  }
                  {question.pageNumber === 2 ? (
                    <div>
                      {question.typeId === 6 &&
                        question.values?.map((item) => {
                          return (
                            <InputRadio
                              key={item.id}
                              name="radio"
                              value={form.radio}
                              onClick={(e) => updateForm(e)}
                              checked={form.radio === item.value}
                            >
                              {item.value}
                            </InputRadio>
                          );
                        })}
                    </div>
                  ) : (
                    <div>
                      {question.typeId === 6 &&
                        question.values?.map((item) => {
                          return (
                            <InputRadio
                              key={item.id}
                              name="radio2"
                              value={form.radio}
                              onClick={(e) => updateForm(e)}
                              checked={form.radio2 === item.value}
                            >
                              {item.value}
                            </InputRadio>
                          );
                        })}
                    </div>
                  )}
                  {
                    <div>
                      {question.typeId === 8 && (
                        <Textarea
                          key={question.id}
                          placeholder={question.placeHolder?.toString()}
                          name="text"
                          value={form.text}
                          onChange={(e) => updateForm(e)}
                        />
                      )}
                    </div>
                  }
                </section>
              }
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default MultiStepForm;
