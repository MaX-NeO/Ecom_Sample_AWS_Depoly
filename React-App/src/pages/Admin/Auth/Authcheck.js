import React,{useState,useEffect} from 'react'
import AdminLogin from '../AdminLogin'
import Dashboard from '../Dashboard'
import { useNavigate } from 'react-router-dom'
export const Authcheck = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isAdmin') === 'true');
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/admin/login');
        }

      }, [isLoggedIn, navigate]);

}
