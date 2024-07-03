import React from "react";

export default function About(props) {
  let aboutStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#6a6c6f" : "white",
  };
  return (
    <>
      <div
        className="accordion container"
        id="accordionExample"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "#2e3339" : "white",
        }}
      >
        <h1 className="mb-3 d-flex justify-content-center">About Us</h1>
        <div className="accordion-item" style={aboutStyle}>
          <h2 className="accordion-header">
            <button
              style={aboutStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or anything.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={aboutStyle}>
          <h2 className="accordion-header">
            <button
              style={aboutStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              Textutils reports the number of words and characters. Thus it is
              suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={aboutStyle}>
          <h2 className="accordion-header">
            <button
              style={aboutStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any browsers such as Chrome,
              Firefox, Safari, Internet Explorer, Opera. It suits to count
              characters in facebook, blog, books, excel document, pdf document,
              essays, etc.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
