import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const UserAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isUser') === 'true');

    let JWTauth = { token: true };

    return (
        isLoggedIn ? <Outlet/> : <Navigate to='/login' replace/>
    )
};
