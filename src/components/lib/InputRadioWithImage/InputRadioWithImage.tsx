import React from "react";
import "./InputRadioWithImage.scss";

interface IInputRadioWithImageProps {
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  src?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
}

const InputRadioWithImage: React.FC<IInputRadioWithImageProps> = (
  props: IInputRadioWithImageProps
) => {
  return (
    <label
      className="radio_button_with_image"
      style={{ width: props.width, height: props.height }}
      onClick={props.onClick}
    >
      <div>
        <div>
          <img alt={`${props?.src}_alt`} src={props?.src} />
        </div>
      </div>
      <div>
        <input
          type="radio"
          name={props.name}
          value={props.children?.toString()}
          defaultChecked={props.checked}
          onClick={props.onClick}
        />
        <span>{props?.children}</span>
      </div>
    </label>
  );
};

export default InputRadioWithImage;
