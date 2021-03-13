import React, { useState } from "react";
import "./Upload.scss";

interface IUploadProps {
  width?: string | number;
  height?: string | number;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Upload: React.FC<IUploadProps> = (props: IUploadProps) => {
  const [fileName, setFileName] = useState("");
  const splitFileName = (e: any) => {
    let val = e.target.value.split("\\");
    setFileName(val.pop());
  };
  return (
    <>
      <label
        htmlFor="image_upload"
        className="upload"
        style={{ width: props.width, height: props.height }}
        onClick={props.onClick}
      >
        <div>
          <div className="image_upload_inner_icon_style"></div>
          <div className="image_upload_inner_icon_style"></div>
        </div>
      </label>
      <input
        className="image_upload_input"
        id="image_upload"
        type="file"
        accept=".png, .jpg, .jpeg"
        multiple={false}
        onChange={(e) => splitFileName(e)}
      />
      <label className="image_upload_name">{fileName}</label>
    </>
  );
};

export default Upload;
