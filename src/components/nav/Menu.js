import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contex/auth';

const Menu = () => {

    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();


    const Logout = () => {
        setAuth({ ...auth, user: null, token: "" })
        localStorage.removeItem("auth");
        navigate("/login");
    }


    return (


        <div class="d-flex justify-content-center pt-3">

            <li className='nav-item'>
                <NavLink className='nav-link' to='/'>
                    Home
                </NavLink>
            </li>



            {
                !auth?.user ? (

                    <>

                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/login'>
                                Login
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/register'>
                                Register
                            </NavLink>
                        </li>
                    </>
                ) : (

                    <>
                        <ul>


                            <li className="nav-item pointer">

                                <a onClick={Logout} className='nav-link'>LOG OUT</a>

                            </li>

                        </ul>
                    </>


                )
            }





        </div>
    );
};

export default Menu;