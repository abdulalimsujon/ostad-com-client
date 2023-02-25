import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Jumbotron from '../components/cards/Jumbotron';
import { useAuth } from '../components/contex/auth';

const Login = () => {

    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();

    const hundleLogin = async (e) => {
        e.preventDefault();




        try {
            const email = e.target.email.value;
            const password = e.target.password.value;
            const { data } = await axios.post("http://localhost:5000/api/v1/login",
                {
                    email,
                    password

                }
            );
            if (data?.error) {
                toast.error(data.error)
            } else {

                toast.success('successfully login ')
                localStorage.setItem("auth", JSON.stringify(data))
                setAuth({ ...auth, token: data.token, user: data.user })
                navigate('/');
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

                    />
                    <br />
                    <input
                        className='mb-2'
                        type="password"

                        placeholder="Enter your password"
                        name="password"
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