// import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import User from "./User";
import { Container, Row } from 'react-bootstrap';

function UserContainer({ }) {

    const [users, setUsers] = useState([]);
    const [value, setValue] = useState(' ')

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
    const onChange = (event) => {
        setValue(event.target.value)
    }

   

return(
    <div className="bg-light border border-5 border-dark justify-contents-center" style={{marginTop: "174px", marginRight: "220px", marginLeft: "220px", borderRadius: "30px"}}>
        <Container>
            <div>
                <input type="text" placeholder="Search Plates" value={value} onChange={onChange}/>
                <button class="btn btn-outline-secondary" type="button">Drive By</button>
            </div>
            
            <Row>
                 {renderUsers} 
            </Row>
        </Container>
        
    </div>
)
}

export default UserContainer;