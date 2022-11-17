import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = ()=> {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }

  const toggleModeHandler = (cls) => {

    if( cls === null){
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "grey";
        showAlert("Dark mode has been enabled", "success");
      } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
      }
    }
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    
  };
  return (
    <Router>
      <div>
        {/* <Navbar title="TextUtils" about="About Us" /> */}
        <Navbar about="About Us" mode={mode} toggleMode={toggleModeHandler} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Char Counter, Remove extra spaces, etc"
                  mode={mode}
                />
              }
            />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
