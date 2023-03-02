import React from 'react';
import AdminMenu from '../../components/nav/AdminMenu';

const Category = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu></AdminMenu>

                    </div>
                    <div className="col-md-9">
                        <div className="">Manage Categories</div>
                        <p>create categories from...</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Category;