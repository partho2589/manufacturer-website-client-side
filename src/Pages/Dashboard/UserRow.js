import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user}) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://desolate-ridge-76720.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged === true){
                    toast.success('Success created admin')
                }
            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;