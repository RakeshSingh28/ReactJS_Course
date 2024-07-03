import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const removeClassList = () => {
  document.body.classList.remove("bg-primary");
  document.body.classList.remove("bg-dark");
  document.body.classList.remove("bg-light");
  document.body.classList.remove("bg-danger");
  document.body.classList.remove("bg-warning");
  document.body.classList.remove("bg-success");
};
function App() {
  const [mode, setMode] = useState("light");
  let changeMode = (cls) => {
    removeClassList();
    document.body.classList.add(`bg-${cls}`);
    if (mode === "light" && cls === null) {
      setMode("dark");
      document.body.style.backgroundColor = "#212529ed";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={changeMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
