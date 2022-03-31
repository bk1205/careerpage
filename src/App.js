import { Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import List from "./components/List";
import "./data/data";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<List listtitle="Business Systems" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
