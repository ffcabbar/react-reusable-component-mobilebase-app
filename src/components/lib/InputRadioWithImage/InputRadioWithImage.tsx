import React from "react";
import "./InputRadioWithImage.scss";

interface IInputRadioWithImageProps {
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
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
          <img alt="example" src="https://picsum.photos/id/237/200/300" />
        </div>
      </div>
      <div>
        <input type="radio" name="radiowithimage" />
        <span>{props.children}</span>
      </div>
    </label>
  );
};

export default InputRadioWithImage;
