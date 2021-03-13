import React from "react";
import "./Textarea.scss";

interface ITextareaProps {
  width?: string | number;
  height?: string | number;
  placeholder?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
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
      onChange={props.onChange}
    >
      {props.children}
    </textarea>
  );
};

export default Textarea;
