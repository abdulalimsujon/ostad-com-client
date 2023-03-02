import React from 'react';
import Jumbotron from '../../components/cards/Jumbotron';
import { useAuth } from '../../components/contex/auth';
import AdminMenu from '../../components/nav/AdminMenu';

const Dashboard = () => {

    const [auth, setAuth] = useAuth();
    return (
        <div>
            <Jumbotron title="Hellow World" subTitle='Welcome to Admin dashbord page'></Jumbotron>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                        <AdminMenu></AdminMenu>

                    </div>
                    <div className="col-md-9">
                        <ul>
                            <li>{auth?.user?.name}</li>
                            <li>{auth?.user?.email}</li>
                            <li>admin</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;