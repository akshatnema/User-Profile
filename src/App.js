import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home"
import Register from "./pages/Register/Register"
import Dashboard from "./pages/Dashboard/Dashboard"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
