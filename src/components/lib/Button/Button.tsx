import React from "react";
import "./Button.scss";

interface IButtonProps {
  color?: string;
  backgroundColor?: string;
  fontSize?: string | number;
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  //   style?: React.CSSProperties;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  return (
    <button
      className="button"
      style={{
        width: props.width,
        height: props.height,
        fontSize: props.fontSize,
        color: props.color,
        backgroundColor: props.backgroundColor,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
