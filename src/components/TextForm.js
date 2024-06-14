import React, { useState } from "react";

export default function TextForm(props) {
  const myStyle = { border: "1px solid black" };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleUCClick = () => {
    setText(text.toUpperCase());
  };
  const handleLCClick = () => {
    setText(text.toLowerCase());
  };
  const handleSCClick = () => {
    if (!text) setText(text);
    setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
  };
  const handleTCClick = () => {
    if (!text) setText(text);
    setText(
      text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };
  const handleRSClick = () => {
    if (!text) setText(text);
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) newText += text.charAt(i);
    setText(newText);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3">
        <h3
          htmlFor="exampleFormControlTextarea1"
          className="form-label justify-content-center d-flex"
        >
          {props.heading}
        </h3>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          autoFocus
          rows="8"
          placeholder="Enter text here"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn btn-primary me-2" onClick={handleUCClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-warning me-2" onClick={handleLCClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-info me-2" onClick={handleTCClick}>
        Convert to TitleCase
      </button>
      <button className="btn btn-success me-2" onClick={handleSCClick}>
        Convert to SentenceCase
      </button>
      <button className="btn btn-danger me-2" onClick={handleRSClick}>
        Reverse the String
      </button>
      <div className="my-3">
        <h3>Your text summary</h3>
        <h6>
          {text.split(" ").length} words and {text.length} letters
        </h6>
        <h6>{0.008 * text.split(" ").length} minutes to read</h6>
        <h2>Preview</h2>
        <p style={myStyle} className="p-2">
          {text}
        </p>
      </div>
    </>
  );
}
