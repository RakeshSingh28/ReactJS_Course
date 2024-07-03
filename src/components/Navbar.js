import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({ title = "Set title here", mode, toggleMode }) {
  let myStyle = { width: "146px", cursor: "pointer" };
  let navbarBtnStyle = {
    height: "25px",
    width: "30px",
    borderRadius: "100px",
    cursor: "pointer",
  };
  return (
    <nav
      className={`navbar justify-content-end navbar-expand-lg navbar-${mode} bg-${mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="./">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  document.title = "TextUtils - Home";
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={() => {
                  document.title = "TextUtils - About";
                }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="bg-primary mx-2"
        style={navbarBtnStyle}
        onClick={() => {
          toggleMode("primary");
        }}
      ></div>
      <div
        className="bg-danger mx-2"
        style={navbarBtnStyle}
        onClick={() => {
          toggleMode("danger");
        }}
      ></div>
      <div
        className="bg-warning mx-2"
        style={navbarBtnStyle}
        onClick={() => {
          toggleMode("warning");
        }}
      ></div>
      <div
        className="bg-success mx-2"
        style={navbarBtnStyle}
        onClick={() => {
          toggleMode("success");
        }}
      ></div>
      <div
        className="form-check form-switch ps-5"
        style={{ cursor: "pointer" }}
      >
        <input
          checked={mode === "dark"}
          style={{ cursor: "pointer" }}
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={() => {
            toggleMode(null);
          }}
        />
        <label
          className={`form-check-label text-${
            mode === "light" ? "dark" : "light"
          }`}
          style={myStyle}
          htmlFor="flexSwitchCheckDefault"
        >
          {mode === "dark" ? "Disable" : "Enable"} Dark Mode
        </label>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
