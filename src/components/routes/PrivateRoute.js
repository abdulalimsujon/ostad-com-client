import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../contex/auth';
import Loading from './Login';


const PrivateRoute = () => {

    const [auth, setAuth] = useAuth();
    const [ok, setOk] = useState(false);

    useEffect(() => {
        if (auth?.token) {

            setOk(true);

        } else {
            setOk(false);
        }

    }, [auth?.token])

    return ok ? <Outlet></Outlet> : <Loading></Loading>

};

export default PrivateRoute;