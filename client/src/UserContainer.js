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
    <div className="bg-light border border-5 border-dark justify-contents-center" style={{marginTop: "174px", marginRight: "175px", marginLeft: "175px", borderRadius: "30px"}}>
        <Container>      
            
            <Row >
                <div>
                    <input type="text" placeholder="Search Plates" className="search" value={userSearch} onChange={(event) => setUserSearch(prevState => prevState = event.target.value)} />
                    <button class="btn btn-outline-secondary" type="button">Drive By</button>
                </div>
                    {search.map((user) => {
                        return( 
                        
                            <Col  xs={3} className="text-dark " key={user.id}>

                                <User className="m-5 align-items-center" user={user} key={user.id} />
                                
                            </Col>
                        )
                    })} 
                                
                 
            </Row>
        </Container>
        
    </div>
)
}

export default UserContainer;