import React from "react";
import './user.css'

function User(props) {
    const {user} = props;
    // <h2>{user.last_name}, {user.first_name} </h2>
    // <img>{user.avatar}</img>
    // <p>Email: {user.email}</p>
    // <p>Password: {user.password}</p>
    return (
        <div className='user'>
            <h2>{user.last_name}, {user.first_name} </h2>
            <img src={user.avatar}/>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default User;