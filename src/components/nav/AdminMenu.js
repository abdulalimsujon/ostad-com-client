import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <>
            <div className="admin-links">

            </div>

            <ul>
                <li>
                    <NavLink to="dashboard/admin/category">Create Category</NavLink>
                </li>
                <li>
                    <NavLink to="dashboard/admin/product">Create Product</NavLink>
                </li>
            </ul>

        </>
    );
};

export default AdminMenu;