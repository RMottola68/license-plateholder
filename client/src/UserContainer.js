// import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import User from "./User";
import { Container, Row, Col } from 'react-bootstrap';

function UserContainer({ }) {

    const [users, setUsers] = useState([]);
    const [userSearch, setUserSearch] = useState('')

    useEffect(()=>{
        fetch('/users')
          .then(res=>res.json())
          .then(data => setUsers(data))
    },[])

    // console.log(order);

    // const renderUsers = users.map((user) => {
    //     return(
    //         <User className="m-5" user={user} key={user.id} />
    //     ) 
        
    // })
  

    const search = users.filter((user)=>  {
        let userSearchCase = userSearch.toLowerCase()
        return (
            user.plate.toLowerCase().includes(userSearchCase)
        )
    })

    
   

return(
    
    <Row  className="bg-light border border-5 border-danger justify-contents-center" style={{marginTop: "150px", marginRight: "175px", marginLeft: "175px", borderRadius: "30px"}}>
        <Row className="my-2 text-center">
            <div>
                <input type="text" placeholder="Search Plates" className="search" value={userSearch} onChange={(event) => setUserSearch(prevState => prevState = event.target.value)} />
                <button className="btn btn-outline-secondary mx-2" type="button">Drive By</button>
            </div>
        </Row>
            {search.map((user) => {
                return( 
                
                    <Col xs={3} className="my-2 text-dark d-flex justify-content-center" key={user.id}>

                        <User className="" user={user} key={user.id} />
                        
                    </Col>
                )
            })} 
                        
            
    </Row>
   
)
}

export default UserContainer;