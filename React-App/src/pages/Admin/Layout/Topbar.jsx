import React from 'react'



function Topbar() {
const email = localStorage.getItem('emailz');

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