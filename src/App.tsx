//import React, { useEffect, useState } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import KalendarApp from "./App";
import "./App.css";
import MyModal from "./MyModal";

const App = () => {
  return (
    <div className="App">
      <MyModal message="hello from app" />
    </div>
  );
};

export default App;
