import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <>
            <div className="admin-links">

                <ul>  <h1 className='pt-3'>Admin links</h1>
                    <li>
                        <NavLink to="/dashboard/admin/category">Create Category</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/admin/product">Create Product</NavLink>
                    </li>
                </ul>

            </div>





        </>
    );
};

export default AdminMenu;