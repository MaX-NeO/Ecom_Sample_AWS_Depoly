import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminLogin } from '../../service/api';
import { Home } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';



export default function AdminLogin() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isAdmin') === 'true');
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
        const res = await adminLogin(signin);
        if (res.data === "Login Successful !") {

            localStorage.setItem('emailz', signin.email);
            localStorage.setItem('isAdmin', 'true');
            toast.success(`Welcome Admin !`, {
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
                navigate('/admin/dashboard');
            }, 1500);

        } else if (res.data === "Invalid Password") {
            toast.error(`Invalid Password`, {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        } else {
            toast.error(`Invalid Email`, {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        }
    };

    const routeHome = () => {
        navigate('/')
    }
    return (
        <>
            <div className='auth-container'>
                <div className='auth-wrapper'>
                    <form className='auth-form app-x-shadow' onSubmit={handleSubmit}>
                        <h1 className='auth-heading'>Admin Login</h1>
                        <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required />
                        <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required />

                        <button type='submit' className='auth-btn app-x-shadow'> Login </button>
                    </form>
                </div>
            </div>
            <button onClick={routeHome} className='route-btn-1 bg-white shadow'><Home color="#a600ff" /></button>
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