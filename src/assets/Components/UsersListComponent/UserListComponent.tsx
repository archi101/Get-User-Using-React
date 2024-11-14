import axios from "axios";
import { FC, useEffect, useState, useRef } from "react";
import UserComponent from "./UserComponent";
import { Login, Name } from "./UsersListTypes";
import './UsersListComponent.css'

interface User {
    name: Name,
    login: Login,
    email: string,
}

const UserListComponent: FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const hasInitialFetch = useRef(false);

    const fetchSingleUser = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('https://randomuser.me/api/?results=1');
            setUsers(prevUsers => [...prevUsers, response.data.results[0]]);
        } catch (error) {
            console.error('Error fetching user:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!hasInitialFetch.current) {
            hasInitialFetch.current = true;
            fetchSingleUser();
        }
    }, []);

    if (isLoading) {
        return (
            <div className="loading">
                <div className="loading-spinner"></div>
                <p>Loading User</p>
            </div>
        );
    }

    return (
        <div className="content-container">
            <div className="UsersInfo">
                {users.map((user, index) => (
                    <div className="UserInfo" key={index}>
                        <UserComponent
                            name={user.name}
                            login={user.login}
                            email={user.email}
                        />
                    </div>
                ))}
                <button
                    className="fetch-button"
                    onClick={fetchSingleUser}
                    disabled={isLoading}
                >
                    {isLoading ? 'Fetching...' : 'Fetch New User'}
                </button>
            </div>
        </div>

    );
};

export default UserListComponent;