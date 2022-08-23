function Review({ review }){
    return(
        <div className="m-5">
            <div style={{fontSize: "25px"}}>{review.title}</div>
            <div style={{fontSize: "30px"}}>Rating: {review.rating}</div>
            <div style={{fontSize: "30px"}}>{review.content}</div>
            <div style={{fontSize: "30px"}}>Likes: {review.likes}</div>
        </div>
    )
}

export default Review;