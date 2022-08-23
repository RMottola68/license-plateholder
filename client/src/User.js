function User({ user }){
    return(
        <div>
            <div style={{fontSize: "25px"}}>Plate #: {user.plate}</div>
            <div style={{fontSize: "30px"}}>State: {user.state}</div>
            <img src={user.image} width="250" height="250" />
        </div>
    )
}

export default User;