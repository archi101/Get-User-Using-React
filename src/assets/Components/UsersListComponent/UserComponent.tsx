import { FC } from "react"
import { Login, Name } from "./UsersListTypes"

interface UsersType {
    name: Name,
    login: Login,
    email: string,
}

const UserComponent: FC<UsersType> = ({ name, login, email }) => {

    return (
        <div>
            <p className="user-name">
                {name.title} {name.first} {name.last}
            </p>
            <p className="user-email">
                📧 {email}
            </p>
            <p className="user-username">
                👤 {login.username}
            </p>
        </div>
    )
}

export default UserComponent