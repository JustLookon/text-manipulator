import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar1";
import Alert from "./components/Alert";

function App() {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState("light");
  const showAlert=(type, message)=>{
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }
  function handleOnClick(e) {
    const newText = setText(e.target.value);
  }

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    showAlert("success","Text has been in upper case!")
  };
  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    showAlert("success","Text has been in lower case!")
  };
  const clearText = () => {
    setText("");
    showAlert("success","Text has been cleared!")
  };
  const ToggleSwitch = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b0e3b";
      document.body.style.color = "white";
      document.body.style.transitionDuration = "150ms";
      showAlert("success","Dark Mode has been enabled!")
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.body.style.transitionDuration = "150ms";
      showAlert("success","Light Mode has been enabled!")

    }

  };
  return (
    <>

      <div className="flex flex-col pb-4">
        <Navbar mode={mode} toggle={ToggleSwitch} />
        <Alert alert = {alert}/>
        <div className="  w-[70vw] mx-auto my-7">

          <textarea
            className="form-control transition-all"
            placeholder={`Type your text here`}
            value={text}
            onChange={handleOnClick}
            id="floatingTextarea2"
            rows={"7"}
            style={{
              backgroundColor: mode === "dark" ? "grey" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button
            className=" mx-2 p-2 bg-blue-500 text-white my-4 rounded-sm "
            onClick={handleUpClick}
          >
            Capitalize your text
          </button>
          <button
            className=" mx-2 p-2 bg-blue-500 text-white my-4 rounded-sm "
            onClick={handleLowClick}
          >
            Lowerize your text
          </button>
          <button
            className=" mx-2 p-2 bg-blue-500 text-white my-4 rounded-sm "
            onClick={clearText}
          >
            Clear your text
          </button>

          <div className="border p-4 rounded-md">
            <h2 className="font-medium text-3xl m-2">Text details</h2>
            words = {text===""?0 :text.split(" ").length} <br />
            character = {text.length} <br />
            Minutes to read the above text ={" "}
            {text.split(" ").length * 0.00420168067}
          </div>
          <div className="border p-4 rounded-md my-5">
            <h2 className="font-medium text-3xl m-2">Preview</h2>
            {text.length > 0 ? text : "Enter your text above to preview here"}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
