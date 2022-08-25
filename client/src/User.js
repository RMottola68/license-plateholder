function User({ user }){
    return(
       
        <div className="card border-success">
            <div className="ms-auto">
                <div style={{fontSize: "25px"}}>Plate #: {user.plate}</div>
                <div style={{fontSize: "30px"}}>State: {user.state}</div>
                <img src={user.image} className="mx-1" width="250" height="auto" />
                <div className="card-button my-1 d-flex justify-content-center align-text-bottom">
                    <a href="#" className="btn btn-success">Leave Review</a>
                </div>
            </div>
        </div>
     
       
    )
}

export default User;