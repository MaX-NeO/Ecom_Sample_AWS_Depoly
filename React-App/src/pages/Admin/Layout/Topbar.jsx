import React from 'react'
import Cookies from 'js-cookie'



function Topbar() {
const email = Cookies.get('emailz');

    return (
        <>
            <div className='topbar'>
                <h1 className='user primary'>
                    {email}
                </h1>
            </div>
        </>
    )
}

export default Topbar