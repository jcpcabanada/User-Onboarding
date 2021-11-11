import React from "react";

 function User ( {users} )  {
     // <h2>{users.last_name}, {users.first_name} </h2>
     // <img>{users.avatar}</img>
    return (
        <div className='container'>

            <p>Email: {users.email}</p>
            <p>Password: {users.password}</p>

        </div>
    )
}
export default User;