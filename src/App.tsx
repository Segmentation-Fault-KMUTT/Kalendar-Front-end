//import React, { useEffect, useState } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import KalendarApp from "./App";
import "./App.css";
import MyModal from "./MyModal";
import AddModal from "./addModal";
import EditModal from "./EditModal";
import ExportModal from "./export";

const App = () => {
  return (
    <div className="App">
      <ExportModal message="hello from app" />
    </div>
  );
};

export default App;
