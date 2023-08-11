import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
export const UserAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isUser') === 'true');
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }

      }, [isLoggedIn, navigate]);

}