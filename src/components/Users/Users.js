import { useEffect, useState } from 'react';
import { usersService } from '../../services/users.service';
import { User } from '../User/User';

export const Users = ({setUser}) => {
    const [users, setUsers] = userState(null);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, []);
    return (
        <div>
            {users.map((user) => <User key={user.id} user={user} setUser={setUser}/>)}
        </div>
    );
}