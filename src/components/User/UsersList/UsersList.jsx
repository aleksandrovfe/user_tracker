import {Card} from "../../UI/Card/Card";
import React from "react";
import {User} from "../User/User";
import classses from './UsersList.module.css'

export const UsersList = ({users}) => {
    console.log('users', users)
    if (users.length === 0) {
        return ""
    } else {
        return (
            <Card className={classses.users}>
                {users.map(user => (
                    <React.Fragment key={user.id}>
                        <User name={user.name} age={user.age}/>
                    </React.Fragment>
                ))}
            </Card>
        )
    }
}
