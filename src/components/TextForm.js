import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const myStyle = {
    border: `1px solid ${props.mode === "light" ? "black" : "white"}`,
    color: `${
      text.length === 0 ? "grey" : props.mode === "light" ? "black" : "white"
    }`,
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleUCClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLCClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleSCClick = () => {
    if (text) {
      setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
      props.showAlert("Converted to SentenceCase!", "success");
    }
  };
  const handleESClick = () => {
    if (text) {
      setText(text.replace(/\s+/g, " ").trim());
      props.showAlert("Extra Spaces removed!", "success");
    }
  };
  const handleTCClick = () => {
    if (text) {
      setText(
        text
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
      props.showAlert("Converted to TitleCase!", "success");
    }
  };
  const handleRSClick = () => {
    if (text) {
      let newText = "";
      for (let i = text.length - 1; i >= 0; i--) newText += text.charAt(i);
      setText(newText);
      props.showAlert("String Reversed!", "success");
    }
  };
  return (
    <>
      <div className={`mb-3 text-${props.mode === "light" ? "dark" : "light"}`}>
        <h3
          htmlFor="exampleFormControlTextarea1"
          className="form-label justify-content-center d-flex"
        >
          {props.heading}
        </h3>
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#555555",
            color: props.mode === "light" ? "black" : "white",
          }}
          className="form-control"
          id="exampleFormControlTextarea1"
          autoFocus
          rows="8"
          placeholder="Enter text here"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        className="btn btn-primary me-2 my-1"
        onClick={handleUCClick}
        disabled={text.length === 0}
      >
        Convert to UpperCase
      </button>
      <button
        className="btn btn-warning me-2 my-1"
        onClick={handleLCClick}
        disabled={text.length === 0}
      >
        Convert to LowerCase
      </button>
      <button
        className="btn btn-info me-2 my-1"
        onClick={handleTCClick}
        disabled={text.length === 0}
      >
        Convert to TitleCase
      </button>
      <button
        className="btn btn-success me-2 my-1"
        onClick={handleSCClick}
        disabled={text.length === 0}
      >
        Convert to SentenceCase
      </button>
      <button
        className="btn btn-danger me-2 my-1"
        onClick={handleRSClick}
        disabled={text.length === 0}
      >
        Reverse the String
      </button>
      <button
        className="btn btn-secondary me-2 my-1"
        onClick={handleESClick}
        disabled={text.length === 0}
      >
        Remove Extra Spaces
      </button>
      <div className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
        <h3>Your text summary</h3>
        <h6>
          {text.length
            ? text.split(/\s+/).filter((ele) => {
                return ele.length !== 0;
              }).length
            : 0}{" "}
          words and {text.length} letters
        </h6>
        <h6>
          {text.length
            ? 0.008 *
              text.split(/\s+/).filter((ele) => {
                return ele.length !== 0;
              }).length
            : 0}{" "}
          minutes to read
        </h6>
        <h2>Preview</h2>
        <p style={myStyle} className="p-2">
          {text.length > 0 ? text : "Enter text above to preview"}
        </p>
      </div>
    </>
  );
}
