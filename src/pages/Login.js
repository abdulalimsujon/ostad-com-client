import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import Jumbotron from '../components/cards/Jumbotron';
import { useAuth } from '../components/contex/auth';

const Login = () => {

    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hundleLogin = async (e) => {
        e.preventDefault();




        try {

            const { data } = await axios.post(
                `/login`,
                {
                    email,
                    password

                }
            );
            if (data?.error) {
                toast.error(data.error)
            } else {

                console.log(data.user.role);


                localStorage.setItem("auth", JSON.stringify(data))
                setAuth({ ...auth, token: data.token, user: data.user })
                toast.success('successfully login ')
                navigate(

                    location.state ||
                    `/dashboard/${data?.user?.role === 1 ? "admin" : "user"} `
                );
            }

        } catch (error) {
            console.log(error);
        }


    }
    return (
        <div>
            <Jumbotron title="Login" subtitle='Welcome to Login Page'></Jumbotron>

            <br />

            <h1 className='text-center '>please Login</h1>

            <div className="d-flex justify-content-center mb-5">


                <form className='p-3 ' onSubmit={hundleLogin}>

                    <br />


                    <input
                        className='mb-2'
                        type="email"

                        placeholder="Enter your email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    <br />
                    <input
                        className='mb-2'
                        type="password"

                        placeholder="Enter your password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button className="btn btn-primary mb-2" type="submit">
                        Submit
                    </button>
                </form>

            </div>

        </div>
    );
};

export default Login;