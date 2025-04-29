import "./App.css";
import { Route, Routes } from "react-router-dom";
import Information from "./components/Information";
import Calculator from "./components/Calculator";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/info" element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
