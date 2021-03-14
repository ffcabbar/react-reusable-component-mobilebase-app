import React from "react";
import InputRadio from "../lib/InputRadio/InputRadio";
import InputRadioWithImage from "../lib/InputRadioWithImage/InputRadioWithImage";
import Textarea from "../lib/Textarea/Textarea";
import QuestionLabel from "../QuestionLabel/QuestionLabel";
import "./MultiStepForm.scss";

interface IMultiStepFormProps {
  formStep: number;
}

const MultiStepForm: React.FC<IMultiStepFormProps> = (
  props: IMultiStepFormProps
) => {
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
