import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type )=> {

    setAlert({
      message : message,
      type : type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleModeHandler = () => {
      if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode has been enabled", "success");
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
      }
  }
  return (
    <div>
      {/* <Navbar title="TextUtils" about="About Us" /> */}
      <Navbar about="About Us" mode ={mode} toggleMode={toggleModeHandler} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter your text below!" mode ={mode} />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
