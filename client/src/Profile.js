function Profile({user}){
    return(
        <div className="profile">
            <img src={user.image} width="250" height="250" />
            <h1>{user.username}</h1>
            <h2>{user.plate}</h2>
            <div className="reviewContainer">
            <p>{user.reviews[0].title}</p>
            <p>{user.reviews[0].content}</p>
            <p>{user.reviews[0].rating}</p>
            </div>
        </div>
    )
}

export default Profile;