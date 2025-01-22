import { useContext, useEffect, useState } from "react";
import { UserContext } from '../../contexts/UserContext';
import * as userService from '../../services/userService'

const Dashboard = () => {
    const { user } = useContext(UserContext);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await userService.index();
                setUserList(fetchedUsers);
            } catch (error) {
                console.log(error)
            }
        }
        if (user) fetchUsers();
    }, [user])

    return (
        <main>
            <h1>Welcome, {user.username}</h1>
            <ul>
                {userList.map((user) => (
                    <li
                        key={user._id}
                    >
                        {user.username}
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Dashboard;