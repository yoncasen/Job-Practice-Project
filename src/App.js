import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
import CompanyList from "./Components/CompanyList";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/company" element={<CompanyList />} />
    </Routes>
  );
};

export default App;
