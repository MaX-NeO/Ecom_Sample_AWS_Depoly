import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
export const UserAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isUser') === 'true');
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }

      }, [isLoggedIn, navigate]);

}