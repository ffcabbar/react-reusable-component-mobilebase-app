import React from "react";
import "./QuestionLabel.scss";

interface IQuestionLabelProps {}

const QuestionLabel: React.FC<IQuestionLabelProps> = (
  props: IQuestionLabelProps
) => {
  return (
    <div className="question_label">Toplam uzunluğu kaç metre olacak?</div>
  );
};

export default QuestionLabel;
