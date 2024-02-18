import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/Common/Header";
import Footer from "../src/Common/Footer";
import Home from "./Pages/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
