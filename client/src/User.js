function User({ user }){
    return(
        <span class="border border-success" width="100">
        <div className="m-5">
            <div style={{fontSize: "25px"}}>Plate #: {user.plate}</div>
            <div style={{fontSize: "30px"}}>State: {user.state}</div>
            <img src={user.image} width="250" height="250" />
            <div class="card-body">
                <a href="#" class="btn btn-primary">Leave Review</a>
            </div>
        </div>
        </span>
    )
}

export default User;