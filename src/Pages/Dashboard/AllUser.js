import React, { useEffect, useState } from 'react';

const AllUser = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [])

    return (
        <div>
            <h1 className='text-2xl text-center text-primary mt-5 font-bold'>All Users</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                            user.map((u, index) => <tr
                                key={u._id}
                            >
                                <th>{index + 1}</th>
                                <td>{u.email}</td>
                                <td><button class="btn btn-xs ">Make Admin</button></td>
                                <td><button class="btn btn-xs ">Delete User</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;