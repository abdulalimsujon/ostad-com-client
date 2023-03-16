import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Jumbotron from '../components/cards/Jumbotron';
import { useAuth } from '../components/contex/auth';



const Register = () => {


    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();


    const hundleSubmit = async (e) => {

        e.preventDefault();

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        try {


            const { data } = await axios.post(
                `/register`,
                // `/register`,
                {
                    name,
                    email,
                    password,
                }
            );
            console.log(data);

            if (data?.error) {
                toast.error(data.error)
            } else {
                toast.success("registration successful");
                localStorage.setItem("auth", JSON.stringify(data))
                setAuth({ ...auth, token: data.token, user: data.user })
                navigate('/')
            }





        } catch (error) {

            console.log(error);

        }




    }
    return (
        <div>
            <Jumbotron title='Register' subTitle='welcome to Register page'></Jumbotron>
            <br />
            <h1 className='text-center '>please register</h1>

            <div className="d-flex justify-content-center mb-5">


                <form className='p-3 ' onSubmit={hundleSubmit}>
                    <input className='mb-2'
                        type="text"

                        placeholder="Enter your name"
                        name="name"

                    />
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

export default Register;