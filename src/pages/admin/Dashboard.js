import React from 'react';
import Jumbotron from '../../components/cards/Jumbotron';
import { useAuth } from '../../components/contex/auth';
import AdminMenu from '../../components/nav/AdminMenu';

const Dashboard = () => {

    const [auth, setAuth] = useAuth();
    return (
        <div>
            <Jumbotron subTitle="Admin Dashboard"></Jumbotron>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                        <AdminMenu></AdminMenu>

                    </div>
                    <div className="col-md-9 ">

                        <div className="p-3 mt-2 mb-2 h4 bg-light">Admin Information</div>

                        <ul className="list-group">
                            <li className="list-group-item">{auth?.user?.name}</li>
                            <li className="list-group-item">{auth?.user?.email}</li>
                            <li className="list-group-item">Admin</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;