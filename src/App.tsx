import "./style/App.scss";
import Button from "./components/lib/Button/Button";
import InputRadio from "./components/lib/InputRadio/InputRadio";
import InputRadioWithImage from "./components/lib/InputRadioWithImage/InputRadioWithImage";
import Textarea from "./components/lib/Textarea/Textarea";
import Upload from "./components/lib/Upload/Upload";

function App() {
  const furkan = (e: any) => {
    console.log(e.target.value.split("\\"), "e");
  };

  return (
    <div style={{ margin: "10px" }}>
      <Button width={343} height={46} onClick={(e) => furkan(e)}>
        DEVAM
      </Button>
      <br />
      <br />
      <InputRadio>Value</InputRadio>
      <br />
      <br />
      <InputRadioWithImage>Values</InputRadioWithImage>
      <br />
      <br />
      <Textarea placeholder="placeholder" />
      <br />
      <br />
      <Upload />
    </div>
  );
}

export default App;
