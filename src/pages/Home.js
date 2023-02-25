import React from 'react';
import Jumbotron from '../components/cards/Jumbotron';
import { useAuth } from '../components/contex/auth';

const Home = () => {
    const [auth, setAuth] = useAuth();
    return (
        <div>
            <Jumbotron title="Hellow World" subTitle='Welcome to Home page'></Jumbotron>

            <pre>{JSON.stringify(auth, null, 4
            )}</pre>
        </div>
    );
};

export default Home;