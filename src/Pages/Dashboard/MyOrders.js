import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`https://desolate-ridge-76720.herokuapp.com/order?customerEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrder(data))
        }
    }, [user])
    return (

        <div>
            <h1 className='text-xl text-success mt-5'> My Order:{order.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S.I</th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((o, index) =>
                                <tr
                                key={o._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{user.displayName}</td>
                                    <td>{o.pName}</td>
                                    <td>{o.pPrice}</td>
                                    <td>{o.quantity}</td>
                                </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;