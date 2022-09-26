import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Login from "./Components/Login";
import MainPage from "./Components/MainPage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};

export default App;
