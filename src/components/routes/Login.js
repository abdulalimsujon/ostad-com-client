import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {

    const navigate = useNavigate();
    const [count, setCount] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {

            setCount((currentCount) => --currentCount);



        }, 1000)

        count === 0 && navigate("/login")

        return () => clearInterval(interval);
    }, [count])
    return (
        <div>

            <h1>redirect you in {count} seconds</h1>

        </div>
    );
};

export default Loading;