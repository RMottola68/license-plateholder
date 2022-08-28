import { Row, Col } from 'react-bootstrap';
function Profile({user}){
    return(
        <Row  style={{height: "100vh", width: "100vw"}}>
            <Col></Col>
            <Col className="bg-light border border-5 border-danger justify-contents-center" style={{marginTop: "160px", borderRadius: "30px"}}>
                <div className="profile m-4">
                    <img src={user.image} width="600" height="auto" />
                    <h1>{user.username}</h1>
                    <h2>{user.plate}</h2>
                    <div className="reviewContainer">
                    <p>{user.reviews[0].title}</p>
                    <p>{user.reviews[0].content}</p>
                    <p>{user.reviews[0].rating}</p>
                    </div>
                </div>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default Profile;