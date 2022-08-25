function User({ user }){
    return(
       
                <div class="card border-success">
                    <div className="m-5">
                        <div style={{fontSize: "25px"}}>Plate #: {user.plate}</div>
                        <div style={{fontSize: "30px"}}>State: {user.state}</div>
                        <img src={user.image} width="250" height="250" />
                        <div class="card-button">
                        <a href="#" class="btn btn-success">Leave Review</a>
                    </div>
                </div>
            </div>
     
       
    )
}

export default User;