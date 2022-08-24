import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link, 
  ReviewForm
} from 'react-router-dom';
import Navigation from "./Navigation";
import UserContainer from "./UserContainer"
import './App.css';
import ReviewContainer from "./ReviewContainer";

function App() {


  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="*" element={<Navigate to="/users" replace/>} />
        <Route path="users" element={<UserContainer />} />
        <Route path="reviews" element={<ReviewContainer />} />      
      </Routes>
    </div>
  );
}

export default App;
