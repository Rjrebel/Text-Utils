import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <div>
      {/* <Navbar title="TextUtils" about="About Us" /> */}
      <Navbar about="About Us" />
      <div className="container">
        <TextForm heading="Enter your text below!" />
      </div>
    </div>
  );
}

export default App;
