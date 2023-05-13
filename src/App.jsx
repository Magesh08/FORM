import React, { useState } from "react";
import "./App.css";
import Form1 from "./pages/Form1";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<Form1 />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
