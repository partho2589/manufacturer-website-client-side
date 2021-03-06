import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAbmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h1 className='text-3xl text-green-600 mt-5 ml-4'>WellCome to Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        !admin && <>
                            <li><Link to=''>My Orders</Link></li>
                            <li><Link to='profile'> MyProfile</Link></li>
                            <li><Link to='add'>Add Review</Link></li>
                        </>
                    }

                    {admin &&
                        <>
                            <li><Link to='profile'> MyProfile</Link></li>
                            <li><Link to='users'> All Users</Link></li>
                            <li><Link to='addProduct'> Add A Product</Link></li>
                            <li><Link to='manageOrders'>Manage All Orders</Link></li>
                            <li><Link to='manageProducts'>Manage Products</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;