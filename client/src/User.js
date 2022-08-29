import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";

function User({ user }){
const [likes, setLikes] = useState(user.likes)
    const userObj = {
        plate: user.plate,
        state: user.state,
        id: user.id,
        likes: user.likes
    }

    function handleLike(){
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ likes: user.likes += 1 }),
          })
            .then((r) => r.json())
            .then((likesData) => {
                setLikes(likesData.likes)
            })
    }
    return(
       
        <div className="card border border-5 border-success bg-danger">
            <div className="">
                <div style={{fontSize: "25px"}}>Plate #: {user.plate}</div>
                <div style={{fontSize: "30px"}}>State: {user.state}</div>
                <div style={{fontSize: "30px"}}>User ID: {user.id}</div>
                <img src={user.image} className="mx-1 "  width="250" height="auto" />
                <Button className="my-2" style={{fontSize:"10px",zIndex:"99",cursor:"pointer", color:"pink"}} onClick={()=> handleLike()}>
                    <span><FontAwesomeIcon icon={faHeart} className="fas fa-3x" /><h4>Likes: {user.likes}</h4></span>
                </Button>
            </div>
        </div>
     
       
    )
}

export default User;