function User({ user }){
    return(
       
        <div className="card border-success">
            <div className="ms-auto mb-1">
                <div style={{fontSize: "25px"}}>Plate #: {user.plate}</div>
                <div style={{fontSize: "30px"}}>State: {user.state}</div>
                <img src={user.image} width="250" height="auto" />
                <div className="card-button">
                    <a href="#" className="btn btn-success">Leave Review</a>
                </div>
            </div>
        </div>
     
       
    )
}

export default User;