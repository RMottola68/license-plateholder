function Review({ review }){
    return(
        <div>
            <div style={{fontSize: "25px"}}>{review.plate}</div>
            <div style={{fontSize: "30px"}}>Rating: {review.state}</div>
            <img src={review.img} />
        </div>
    )
}

export default Review;