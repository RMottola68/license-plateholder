function User({ user }){
    return(
        <div>
            <div style={{fontSize: "25px"}}>{user.plate}</div>
            <div style={{fontSize: "30px"}}>Rating: {user.state}</div>
            <img src={user.img} />
        </div>
    )
}

export default User;