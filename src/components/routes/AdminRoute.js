import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../contex/auth';
import Loading from '../routes/Loading';


const AdminRoute = () => {
    // context
    const [auth, setAuth] = useAuth()
    // state
    const [ok, setOk] = useState(false);

    useEffect(() => {
        const adminCheck = async () => {
            const { data } = await axios.get("/isAdmin");
            if (data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        };

        if (auth?.token) adminCheck();
    }, [auth?.token]);

    return ok ? <Outlet /> : <Loading path="" />;
};

export default AdminRoute;