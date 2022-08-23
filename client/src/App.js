import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';
import Navigation from "./Navigation";
import UserContainer from "./UserContainer"
import './App.css';

function App() {


  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="*" element={<Navigate to="/users" replace/>} />
        <Route path="users" element={<UserContainer />} />
        <Route path="reviews" element={<h1>Review Form Here</h1>} />
      </Routes>
    </div>
  );
}

export default App;
