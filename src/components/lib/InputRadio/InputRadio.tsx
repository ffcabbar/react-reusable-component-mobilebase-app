import React from "react";
import "./InputRadio.scss";

interface IInputRadioProps {
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
}

const InputRadio: React.FC<IInputRadioProps> = (props: IInputRadioProps) => {
  return (
    <label
      className="radio_button"
      style={{ width: props.width, height: props.height }}
      onClick={props.onClick}
    >
      <input
        type="radio"
        name={props.name}
        value={props.children?.toString()}
        onClick={props.onClick}
        defaultChecked={props.checked}
      />
      <span>{props.children}</span>
    </label>
  );
};

export default InputRadio;
