import { useState, useEffect } from 'react';
import Review from "./Review";
import { Container, Row } from 'react-bootstrap';

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
            <Review className="m-5" review={review} key={review.id} />
        ) 
        
    })

return(
    <div className="bg-light border border-5 border-dark justify-contents-center" style={{marginTop: "174px", marginRight: "220px", marginLeft: "220px", borderRadius: "30px"}}>
        <Container>
            <Row>
                {renderReviews}
            </Row>
        </Container>
        
    </div>
)
}

export default ReviewContainer;