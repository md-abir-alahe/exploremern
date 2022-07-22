import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <section className='signin-form'>
                <div className='container mt-5'>
                    <div className='signup-content'>
                        <div className='signup-form'>
                            <h2 className='form-title'>Log in</h2>
                            <form className='form-group' id='register-form'>

                                <div className='form-group'>
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete='off' placeholder='Your email' />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete='off' placeholder='Your password' />
                                </div>

                                <div className='form-group form-button'>
                                    <input type="submit" name="signin" id="signin " className='form-submit' value="Log in" />
                                </div>

                            </form>

                            <div className='signin-image'>
                                <figure>
                                    <img src="plantutors-signup" alt="registration pic" />
                                </figure>
                                <NavLink to="/signup" className="signin-image-link" >Create an account.</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login