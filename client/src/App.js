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
import ReviewContainer from "./ReviewContainer";
import SignUp from "./SignUp";
import Login from "./Login";
import ReviewForm from "./ReviewForm";
import Profile from "./Profile";
import SynthGround from "./assets/synthroad.png";


function App() {
  const [user, setUser] = useState(null);
  const [reviews, setReviews]=useState([])

  const sectionStyle = {
    backgroundImage: `url(${SynthGround})`,
    height: "100%",
    width: "100%",
    backgroundAttachment: "fixed"
  }

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  


  useEffect(()=>{
    fetch('/reviews')
      .then(res=>res.json())
      .then(reviewsData => setReviews(reviewsData))
  },[])
  
  
  function handleUpdateReviews(updatedReview){
    const updateReview = reviews.map((review)=> review.id === reviews.id ? updatedReview : review);
    setReviews(updateReview)
  }

console.log(user)
if(!user) return <Login setUser={setUser} />
  return (
    <div className="App p-0" style={sectionStyle}>
      <Navigation user={user} setUser={setUser} />
      <Routes>
        <Route path="*" element={user == null ? <Navigate to="/login" replace/> : <Navigate to="/users" replace/>} />
        <Route path="users" element={<UserContainer />} />
        <Route path="reviews" element={<ReviewContainer reviews={reviews} setReviews={setReviews}/>} />
        <Route path="login" element={<Login />} />
        <Route path="newreview" element={<ReviewForm reviews={reviews} setReviews={setReviews} />} />
        <Route path="profile" element={<Profile user={user}/>} />
      </Routes>
    </div>
  );
}


export default App;
