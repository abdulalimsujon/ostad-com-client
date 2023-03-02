import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingImage from "././images/loading.gif"

const Loading = ({ path = "login" }) => {

    const [count, setCount] = useState(3)
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {

        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount)
        }, 1000)
        // redirect  oncee when count ==0 
        count === 0 &&
            navigate(`/${path}`,
                {
                    state: location.pathname


                }


            )



        return () => clearInterval(interval)
    }, [count])
    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "90vh" }}
        >
            <img src={LoadingImage} alt="Loading" style={{ width: "400px" }} />
        </div>
    );
};

export default Loading;