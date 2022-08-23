import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';
import Navigation from "./Navigation";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="*" element={<Navigate to="/Search" replace/>} />
        <Route path="search" element={<h1>Test Element</h1>} />
        <Route path="review" element={<h1>Review Form Here</h1>} />
      </Routes>
    </div>
  );
}

export default App;
