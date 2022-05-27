import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const AllUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://desolate-ridge-76720.herokuapp.com/user')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    return (
        <div>
            <h1 className='text-2xl text-center text-primary mt-5 font-bold'>All Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Creat Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                           users.map(user=><UserRow
                           key={user._id}
                           user={user}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;