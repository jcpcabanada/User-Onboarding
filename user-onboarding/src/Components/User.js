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
            {user.avatar ? <img src={user.avatar} alt="user profile pic"/> :
                <img src="https://images.theconversation.com/files/144359/original/image-20161103-25349-1jdv0b3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt=""/>}

            <p>Email: {user.email}</p>
        </div>
    )
}

export default User;