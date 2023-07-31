import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin, getUserbyId } from '../../service/api';
import Cookies from 'js-cookie';
import { Navbar } from '../../components/Navbar';
import { Footer } from './../../components/Footer';



export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isUser') === 'true');
    const navigate = useNavigate();
    const [signin, setSignin] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setSignin({ ...signin, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await userLogin(signin);
        if (res.status === 200) {
            const getuid = (res.data).charAt((res.data).length - 1);
            console.log(getuid)
            const xUserData = await getUserbyId(getuid);
            Cookies.set('xuserName', xUserData.data.name, { expires: 2 });
            Cookies.set('xuserEmail', xUserData.data.email, { expires: 2 });
            Cookies.set('xuserPhone', xUserData.data.phone, { expires: 2 });
            Cookies.set('xuserAddress', xUserData.data.address, { expires: 2 });
            Cookies.set('xuserPassword', signin.password, { expires: 2 });

            Cookies.set('xuserID', getuid, { expires: 2 });
            Cookies.set('isUser', 'true', { expires: 2 });
            console.log("login successfull")
            // setTimeout(() => {
            navigate('/user/dashboard');
            // }, 1500);

        } else if (res.status === 401) {
            console.log('invalid pass');
        } else {
            console.log('invalid email')
        }
    };


    return (
        <>
            <div className='main'>
                <Navbar />
                <div className='auth-container'>
                    <div className='auth-wrapper'>
                        <form className='auth-form app-x-shadow' onSubmit={handleSubmit}>
                            <h1 className='auth-heading'>Login</h1>
                            <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required />
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required />

                            <button type='submit' className='auth-btn app-x-shadow'> Login </button>
                        </form>
                        <Link to='/register' className='auth-links'>Register</Link>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}