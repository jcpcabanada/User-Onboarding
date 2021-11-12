import React from "react";
import User from "./User";
import './users.css'

export default function Users(props) {
    const {users} = props

    return (
        <div className="users">
            {
                users.map(user => {
                    return <User user={user} key={user.id}/>
                })
            }
        </div>
    )
}