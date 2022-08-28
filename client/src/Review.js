function Review({ review }){
    return(
        
        
        <div className="card border-success">      
            <div className="m-5">
                <h1 style={{fontSize: "30px"}}><u>{review.title}</u></h1>
                <h2 style={{fontSize: "25px"}}>Rating: {review.rating}</h2>
                <h4 style={{fontSize: "20px"}}>{review.content}</h4>
                <div style={{fontSize: "30px"}}>Likes: {review.likes}</div>
            </div>
        </div>
            
       
            
        
    )
}

export default Review;