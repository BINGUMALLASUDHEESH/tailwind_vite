import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import DigitalGoldDashboard from "./components/DigitalGoldDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DigitalGoldDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
