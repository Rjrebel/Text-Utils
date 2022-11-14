import React, { useState } from "react";

export default function TextForm(props) {
  const upperCaseHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCaseHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="mb-3">
        <h1 className="text-center p-3">{props.heading}</h1>
        <textarea
          className="form-control border border-secondary"
          id="myBox"
          rows="8"
          onChange={onChangeHandler}
          value={text}
        />
        <button
          onClick={upperCaseHandler}
          className="btn btn-outline-primary me-2 mt-3"
        >
          Convert to Uppercase
        </button>
        <button
          onClick={lowerCaseHandler}
          className="btn btn-outline-primary mt-3"
        >
          Convert to Lowercase
        </button>
      </div>
      <div className="p-1">
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
