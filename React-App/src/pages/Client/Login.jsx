import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin, getUserbyId } from '../../service/api';
import { Navbar } from '../../components/Navbar';
import { Footer } from './../../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import LoginSVG from '../../assets/ico/login.webp';
import { v4 as xuidkey } from 'uuid';
import CryptoJS from 'crypto-js';

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isUser') === 'true');
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
        if ((res.data).slice(0, -2) == "Login_Auth") {

            localStorage.setItem('isUser', 'true');
            //fetch
            console.log(res.data)
            const getuid = (res.data).charAt((res.data).length - 1);
            // console.log(getuid)

            //encrypt
            const __enc_auth_k = xuidkey(); //uuidkey
            // console.log(__enc_auth_k);
            const __enc_auth_u = CryptoJS.AES.encrypt(getuid, __enc_auth_k).toString();

            // const __enc_auth_d=CryptoJS.AES.decrypt(__enc_auth_u,__enc_auth_k).toString(CryptoJS.enc.Utf8);
            // console.log(__enc_auth_d)
            localStorage.setItem('__enc_auth_k', __enc_auth_k);
            localStorage.setItem('__enc_auth_u', __enc_auth_u);
            //store
            const xUserData = await getUserbyId(getuid);
            localStorage.setItem('xuserName', xUserData.data.name);
            localStorage.setItem('xuserEmail', xUserData.data.email);
            localStorage.setItem('xuserPhone', xUserData.data.phone);
            localStorage.setItem('xuserAddress', xUserData.data.address);
            // localStorage.setItem('xuserID', getuid);

            toast.success(` Welcome ${xUserData.data.name} !`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/user/dashboard');
            }, 1500);

        } else if (res.data == "Invalid_Email") {
            toast.error(` Invalid Email !`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (res.data == "Invalid_Password") {
            toast.error(`Invalid Password !`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            console.log('error')
        }
    };


    return (
        <>
            <div className='main'>
                <Navbar />
                <div className='auth-container'>
                    <div className='auth-wrapper'>
                        <form className='auth-form app-x-shadow' onSubmit={handleSubmit}>
                            <img src={LoginSVG} alt="login-img" className='auth-svg' />
                            {/* <h1 className='auth-heading'>Login</h1> */}
                            <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required />
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required />

                            <button type='submit' className='auth-btn app-x-shadow'> Login </button>
                        </form>
                        <Link to='/register' className='auth-links'>Register</Link>
                    </div>
                </div>
                <Footer />
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}