import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h1 className='text-3xl text-green-600 mt-5 ml-4'>WellCome to Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to=''>My Orders</Link></li>
                    <li><Link to='add'>Add Review</Link></li>
                    <li><Link to='profile'> MyProfile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;