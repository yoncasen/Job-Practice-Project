import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";

import Navbar from "./Navbar";

const MainPage = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <h1 className="text-center">Aruna Mobil Sipariş'e Hoşgeldiniz</h1>
        <Footer />
      </div>
    );
  }
};

export default MainPage;
