import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

function Leftbar() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isAdmin') === 'true');
    const navigate = useNavigate();

    const dashboardHandler = () => {
        navigate('/admin/dashboard')
    }
    const feedbackHandler = () => {
        navigate('/admin/feedbacks/view')
    }
    const productHandler = () => {
        navigate('/admin/products/view')
    }
    const userHandler = () => {
        navigate('/admin/users/view')
    }
    const logoutHandler = () => {
        if (isLoggedIn) {
            navigate('/Admin/login');
            Cookies.remove('isAdmin');
            setIsLoggedIn(false);
        } else {
            navigate('/Admin/login');
        }
    }
    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                    <button className='left-bar-button nav-btn' onClick={dashboardHandler}>
                        Dashboard
                    </button>
                    <button className='left-bar-button nav-btn' onClick={userHandler}>
                        Users
                    </button>
                    <button className='left-bar-button nav-btn' onClick={productHandler}>
                        Products
                    </button>
                    <button className='left-bar-button nav-btn' onClick={feedbackHandler}>
                        Feedbacks
                    </button>
                    <button className='left-bar-button-logout nav-btn' onClick={logoutHandler}>
                        Logout
                    </button>

                </div>
            </div>
        </>
    )
}

export default Leftbar