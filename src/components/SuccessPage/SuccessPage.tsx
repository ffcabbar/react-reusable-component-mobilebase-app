import React from "react";
import image from "../../confetti-03.png";
import confetti from "../../hey.png";
import "./SuccessPage.scss";

interface ISuccessPageProps {}

const SuccessPage: React.FC<ISuccessPageProps> = (props: ISuccessPageProps) => {
  return (
    <div>
      <img alt="success" src={image} />
      <img alt="confetti" src={confetti} className="confetti" />
      <div className="success_title">Talebini aldık!</div>
    </div>
  );
};

export default SuccessPage;
