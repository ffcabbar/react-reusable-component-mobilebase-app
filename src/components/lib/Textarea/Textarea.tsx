import React from "react";
import "./Textarea.scss";

interface ITextareaProps {
  width?: string | number;
  height?: string | number;
  placeholder?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Textarea: React.FC<ITextareaProps> = (props: ITextareaProps) => {
  return (
    <textarea
      className="textarea"
      required
      style={{ width: props.width, height: props.height }}
      placeholder={props.placeholder}
      onClick={props.onClick}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    >
      {props.children}
    </textarea>
  );
};

export default Textarea;
