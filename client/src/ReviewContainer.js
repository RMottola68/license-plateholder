import { useState, useEffect } from 'react';
import Review from "./Review";
import { Container, Row, Col } from 'react-bootstrap';

function ReviewContainer({ reviews, setReviews }) {

    

    function fetchReviews()  {
      fetch("/reviews")
      .then(res => res.json())
      .then(data => {
          setReviews(data);
      })
    }
    useEffect((fetchReviews), []);
    // console.log(order);

    const renderReviews = reviews.map((review) => {

        return(
            <Col xs={3} className="text-dark justify-content-center" key={review.id}>
                <Review className="bg" review={review}  />
            </Col>
        ) 
        
    })

return(
    <Container className="bg-muted border border-5 border-danger justify-contents-center" style={{marginTop: "150px", marginRight: "220px", marginLeft: "220px", borderRadius: "30px", height: "100vh"}}>
        
        
        <h1 className="text-center ">Reviews</h1>
        
        
        <Row className="mt-3">
       
            {renderReviews}
        </Row>
    </Container>
)
}

export default ReviewContainer;