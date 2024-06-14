import React, { useState } from "react";

export default function About() {
  const [myState, setState] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [switchType, setBtnState] = useState("Enable Dark Mode");
  const [btnClass, setBtnClassState] = useState("btn btn-dark my-3");
  let screenModeClicked = () => {
    let newState = {
      color: myState.color === "black" ? "white" : "black",
      backgroundColor: myState.backgroundColor === "white" ? "black" : "white",
    };
    setState(newState);
    let btnLabel =
      switchType === "Enable Dark Mode"
        ? "Enable Light Mode"
        : "Enable Dark Mode";
    setBtnState(btnLabel);
    let newBtnClass = btnClass.includes("btn-dark")
      ? "btn btn-secondary my-3"
      : "btn btn-dark my-3";
    setBtnClassState(newBtnClass);
  };
  return (
    <>
      <div class="accordion container" id="accordionExample" style={myState}>
        <h1 className="mb-3 d-flex justify-content-center">About Us</h1>
        <div class="accordion-item" style={myState}>
          <h2 class="accordion-header">
            <button
              style={myState}
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={myState}>
          <h2 class="accordion-header">
            <button
              style={myState}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={myState}>
          <h2 class="accordion-header">
            <button
              style={myState}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div>
          <button className={btnClass} onClick={screenModeClicked}>
            {switchType}
          </button>
        </div>
      </div>
    </>
  );
}
