import React, { useState } from "react";
import InputRadio from "../lib/InputRadio/InputRadio";
import InputRadioWithImage from "../lib/InputRadioWithImage/InputRadioWithImage";
import Textarea from "../lib/Textarea/Textarea";
import QuestionLabel from "../QuestionLabel/QuestionLabel";
import "./MultiStepForm.scss";

interface IMultiStepFormProps {}

const MultiStepForm: React.FC<IMultiStepFormProps> = (
  props: IMultiStepFormProps
) => {
  const [formStep, setFormStep] = useState<number>(0);
  return (
    <div className="multi_step_form">
      <QuestionLabel />
      <form>
        {formStep === 0 && (
          <section>
            <InputRadioWithImage />
          </section>
        )}
        {formStep === 1 && (
          <section>
            <InputRadio />
          </section>
        )}
        {formStep === 2 && (
          <section>
            <Textarea />
          </section>
        )}
      </form>
      <button onClick={() => setFormStep(formStep + 1)}>asdasd</button>
    </div>
  );
};

export default MultiStepForm;
