// import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import User from "./User";
import { Container, Row } from 'react-bootstrap';

function UserContainer({ }) {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('/users')
          .then(res=>res.json())
          .then(data => setUsers(data))
      },[])
    // console.log(order);

    const renderUsers = users.map((user) => {
        return(
            <User className="m-5" user={user} key={user.id} />
        ) 
        
    })

return(
    <div className="bg-light border border-1 border-warning justify-contents-center" style={{marginTop: "174px", marginRight: "220px", marginLeft: "220px", borderRadius: "30px"}}>
        <Container>
            <Row>
                 {renderUsers} 
            </Row>
        </Container>
        
    </div>
)
}

export default UserContainer;