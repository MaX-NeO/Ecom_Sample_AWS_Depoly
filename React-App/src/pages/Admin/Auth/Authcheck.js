import React,{useState,useEffect} from 'react'
import AdminLogin from '../AdminLogin'
import Dashboard from '../Dashboard'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
export const Authcheck = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isAdmin') === 'true');
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/admin/login');
        }

      }, [isLoggedIn, navigate]);

}
