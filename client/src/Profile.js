import { Row, Col } from 'react-bootstrap';
function Profile({user}){
    console.log(user.reviews[0] == undefined)
    return(
        <Row  style={{height: "100vh", width: "100vw"}}>
            <Col></Col>
            <Col className="bg-muted border border-5 border-danger justify-contents-center" style={{marginTop: "160px", borderRadius: "30px"}}>
                <div className="bg-light profile m-4 text-center">
                    <img src={user.image} width="600" height="auto" />
                    <h1>Driver Name: {user.username}</h1>
                    <h2>Plate Number: {user.plate}</h2>
                    <div className="reviewContainer">
                    {user.reviews[0] == undefined ? <p>NO COMMENTS YET</p> : <div>{user.reviews[0].title} <br></br> {user.reviews[0].content} <br></br> {user.reviews[0].rating} </div>}
                    {/* {user.reviews[0].title ? <h3>{user.reviews[0].title}</h3> : <></>}
                    {user.reviews[0].content ? <h3>{user.reviews[0].content}</h3> : <></>}
                    {user.reviews[0].rating ? <h3>User Rating: {user.reviews[0].rating}</h3> : <></>} */}
                    <h3>User ID Number: {user.id}</h3>
                    </div>
                </div>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default Profile;