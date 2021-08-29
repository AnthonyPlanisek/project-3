import React from 'react';

const UserList = ({
    users
}) => {
    return (
        <div>
            {users.map((user) => (
                <div>
                    <h1>{user.username}</h1>
                </div>
            ))}
        </div>
    )
}

export default UserList