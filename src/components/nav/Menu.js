import React from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import useCategory from '../../hooks/useCategory';
import { useAuth } from '../contex/auth';

const Menu = () => {

    const [auth, setAuth] = useAuth();

    //hooks
    const categories = useCategory();
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

            <div className="dropdown">
                <li>
                    <a
                        className="nav-link pointer dropdown-toggle"
                        data-bs-toggle="dropdown"
                    >
                        CATEGORIES
                    </a>

                    <ul
                        className="dropdown-menu"
                        style={{ height: "300px", overflow: "scroll" }}
                    >
                        <li>
                            <NavLink className="nav-link" to="/categories">
                                All Categories
                            </NavLink>
                        </li>

                        {categories?.map((c) => (
                            <li key={c._id}>
                                <NavLink className="nav-link" to={`/category/${c.slug}`}>
                                    {c.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </li>
            </div>





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

                    <div className="dropdown">
                        <li>
                            <a
                                className="nav-link pointer dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                {auth?.user?.name?.toUpperCase()}
                            </a>

                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink
                                        className="nav-link"
                                        to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                                            }`}
                                    >
                                        Dashboard
                                    </NavLink>
                                </li>

                                <li className="nav-item pointer">
                                    <a onClick={Logout} className="nav-link">
                                        Logout
                                    </a>
                                </li>


                            </ul>
                        </li>
                    </div>

                )

            }





        </div >
    );
};

export default Menu;