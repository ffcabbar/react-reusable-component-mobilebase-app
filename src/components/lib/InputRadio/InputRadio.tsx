import React from "react";
import "./InputRadio.scss";

interface IInputRadioProps {
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const InputRadio: React.FC<IInputRadioProps> = (props: IInputRadioProps) => {
  return (
    <label
      className="radio_button"
      style={{ width: props.width, height: props.height }}
      onClick={props.onClick}
    >
      <input type="radio" name="radio" />
      <span>{props.children}</span>
    </label>
  );
};

export default InputRadio;
