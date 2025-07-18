import React from "react";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
