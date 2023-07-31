import React from 'react'
import Topbar from './Topbar'
import Leftbar from './Leftbar'
import { Authcheck } from '../Auth/authcheck'

function Layout() {
  return (
    <>
    <div className='Appbar'>
        <Authcheck/>
        <Topbar/>
        <Leftbar/>
    </div>
    </>
  )
}

export default Layout