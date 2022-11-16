import React, { useState } from "react";

export default function TextForm(props) {
  const upperCaseHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const lowerCaseHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const clearTextHandler = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "info");
  };

  const copyTexthandler = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
  }

  const extraSpaceHandler = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra white spaces removed.", "success");
  }

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="mb-3" style={{color : props.mode === 'dark' ? 'white' :'black'}}>
        <h1 className="text-center p-3">{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          onChange={onChangeHandler}
          value={text}
          style={{backgroundColor : props.mode === 'dark' ? 'grey' :'white',
        color: props.mode === 'dark' ? 'white' : 'black',
        border: props.mode === 'dark' ? '1px solid white' : '1px solid black'}}
        />
        <button
          onClick={upperCaseHandler}
          className="btn btn-primary me-2 mt-3"
        >
          Convert to Uppercase
        </button>
        <button
          onClick={lowerCaseHandler}
          className="btn btn-primary mt-3 me-2"
        >
          Convert to Lowercase
        </button>
        <button
          onClick={clearTextHandler}
          className="btn btn-primary mt-3 me-2"
        >
          Clear Text
        </button>
        <button
          onClick={copyTexthandler}
          className="btn btn-primary mt-3 me-2"
        >
          Copy Text
        </button>
        <button
          onClick={extraSpaceHandler}
          className="btn btn-primary mt-3 me-2"
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="p-1" style={{color : props.mode === 'dark' ? 'white' :'black'}}>
        <h3>Your Text Summary :</h3>
        <p className="lead">
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p className="lead">
          Reading time : {0.008 * text.split(" ").length} minutes
        </p>
        <hr/>
        <h3>Preview :</h3>
        <p className="lead">{text}</p>
      </div>
    </>
  );
}
